import { Component, AfterViewInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnDestroy {
  title = 'SuhaasPortfolio';
  private isBrowser = false;

  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D | null;
  private animationId = 0;
  private points: { x: number; y: number; vx: number; vy: number }[] = [];
  private mouse = { x: -9999, y: -9999 };

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;
    this.initCanvas();
    this.createPoints();
    this.startLoop();
    window.addEventListener('resize', this.onResize);
    window.addEventListener('mousemove', this.onMouseMove);
  }

  ngOnDestroy(): void {
    if (this.isBrowser) {
      window.removeEventListener('resize', this.onResize);
      window.removeEventListener('mousemove', this.onMouseMove);
    }
    // cancelAnimationFrame is a browser API — guard in case we're running under SSR
    if (this.isBrowser && typeof cancelAnimationFrame !== 'undefined') {
      cancelAnimationFrame(this.animationId);
    }
  }

  private initCanvas() {
    this.canvas = document.getElementById('bg-canvas') as HTMLCanvasElement;
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.resizeCanvas();
    // ensure canvas doesn't block pointer events
    this.canvas.style.position = 'fixed';
    this.canvas.style.left = '0';
    this.canvas.style.top = '0';
    this.canvas.style.width = '100%';
    this.canvas.style.height = '100%';
    this.canvas.style.zIndex = '0';
    this.canvas.style.pointerEvents = 'none';
  }

  private resizeCanvas = () => {
    if (!this.canvas) return;
    const dpr = window.devicePixelRatio || 1;
    this.canvas.width = Math.floor(window.innerWidth * dpr);
    this.canvas.height = Math.floor(window.innerHeight * dpr);
    this.canvas.style.width = window.innerWidth + 'px';
    this.canvas.style.height = window.innerHeight + 'px';
    if (this.ctx) this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };

  private onResize = () => {
    this.resizeCanvas();
    // optionally re-create points to match new density
    this.createPoints();
  };

  private createPoints() {
    const count = Math.max(12, Math.floor((window.innerWidth * window.innerHeight) / 120000));
    this.points = [];
    for (let i = 0; i < count; i++) {
      this.points.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
      });
    }
  }

  private startLoop = () => {
    const step = () => {
      this.update();
      this.draw();
      this.animationId = requestAnimationFrame(step);
    };
    this.animationId = requestAnimationFrame(step);
  };

  private update() {
    const mx = this.mouse.x;
    const my = this.mouse.y;
    for (const p of this.points) {
      // simple noise-like movement
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < -50) p.x = window.innerWidth + 50;
      if (p.x > window.innerWidth + 50) p.x = -50;
      if (p.y < -50) p.y = window.innerHeight + 50;
      if (p.y > window.innerHeight + 50) p.y = -50;

      // mouse interaction: repel
      const dx = p.x - mx;
      const dy = p.y - my;
      const dist2 = dx * dx + dy * dy;
      const influence = 120000; // tune
      if (dist2 < influence) {
        const f = (1 - dist2 / influence) * 0.8;
        p.vx += (dx / Math.sqrt(dist2 + 0.001)) * f * 0.05;
        p.vy += (dy / Math.sqrt(dist2 + 0.001)) * f * 0.05;
      }

      // damp
      p.vx *= 0.995;
      p.vy *= 0.995;
    }
  }

  private draw() {
    if (!this.ctx) return;
    const ctx = this.ctx;
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    // draw faint connecting lines
    for (let i = 0; i < this.points.length; i++) {
      const a = this.points[i];
      for (let j = i + 1; j < this.points.length; j++) {
        const b = this.points[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const d2 = dx * dx + dy * dy;
        const maxD2 = 160000; // 400px
        if (d2 < maxD2) {
          const alpha = 0.18 * (1 - d2 / maxD2);
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }
    // draw moving points as subtle dots
    for (const p of this.points) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255,255,255,0.9)';
      ctx.fill();
    }
  }

  private onMouseMove = (e: MouseEvent) => {
    this.mouse.x = e.clientX;
    this.mouse.y = e.clientY;
  };
}
