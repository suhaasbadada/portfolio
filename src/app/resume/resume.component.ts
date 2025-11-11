import { Component, AfterViewInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ResumeComponent implements AfterViewInit {
  private sectionObserver?: IntersectionObserver;
  @ViewChild('resumeContainer') resumeContainer!: ElementRef;

  constructor(private sanitizer: DomSanitizer) {}

  certifications_urls = [
    { name: 'Angular and ASP.NET core', url: 'https://www.udemy.com/certificate/UC-7f30281f-8e37-45a5-89f7-3aca2116427d/' },
    { name: 'Docker and Kubernetes', url: 'https://www.udemy.com/certificate/UC-ed2a918f-7b55-4abf-8a8c-bf338cc6ce41/' },
    { name: 'Python for DS and ML', url: 'https://www.udemy.com/certificate/UC-3014b25b-4aae-4f07-8921-f80dbe586b8c/' },
  ];

  education = [
    {
      institution: 'Indiana University Bloomington',
      degree: 'Masters in Computer Science',
      duration: 'Aug 2024 - May 2026',
      grade: '3.95 / 4'
    },
    {
      institution: 'Vellore Institute of Technology',
      degree: 'Bachelors in Computer Science',
      duration: 'Jul 2019 - May 2023',
      grade: '8.69 / 10'
    }
  ];

  awards = [
    {
      name: 'Luddy Hackathon Fourth Edition Winner',
      description: 'Won the said hackathon for building InnovAIte, an AI-powered innovation portal that uses the ReAct framework to evaluate and prioritize user-submitted ideas based on business impact, ROI, and strategic alignment. The platform includes a PowerBI analytics dashboard for tracking idea performance and supports data-driven decision-making for strategic innovation.'
    },
    {
      name: 'Vernon Clapp IDEA Competition Semifinalist',
      description: 'Was one of the semifinalists for proposing MailMart, a platform that curates and showcases personalized email offers in a user-friendly interface.'
    },
    {
      name: 'Luddy Hackathon Third Edition Winner',
      description: 'Won the said hackathon for developing the Indiana Toxicity Watch platform, an interactive tool that tracks toxic chemical exposure, correlates health risks, and provides data-driven insights to help Indiana residents and policymakers make informed decisions on environmental health.'
    },
    {
      name: 'MLH Hoya Hacks Google Cloud Track Winner',
      description: 'Won the said hackathon for developing a machine learning-based diagnostic tool that analyzes user symptoms to predict potential diseases, offers precautionary measures, and provides nearby medical facility locations.'
    },
    {
      name: 'Typing Competition Luddy (x2)',
      description: 'Awarded 1st place (100+ WPM) for fastest typing during the Typing Competition at Luddy School of Informatics.'
    }
  ];

  showTranscript: SafeResourceUrl | null = null;

  ngAfterViewInit() {
    if (this.resumeContainer) {
      this.setupSmoothScrolling();
      this.setupActiveSectionObserver();
    }
  }

  ngOnDestroy(): void {
    if (this.sectionObserver) {
      this.sectionObserver.disconnect();
    }
  }

  private setupSmoothScrolling() {
    // Attach smooth-scrolling to any in-page fragment links inside the resume container
    const links = this.resumeContainer.nativeElement.querySelectorAll('a[href^="#"]');
    links.forEach((link: HTMLAnchorElement) => {
      link.addEventListener('click', (e: Event) => {
        // prevent router or default anchor navigation
        e.preventDefault();
        const href = link.getAttribute('href') || '';
        const targetId = href.startsWith('#') ? href.substring(1) : '';
        if (!targetId) return;
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const offset = 80; // Offset for sticky header
          const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
        }
      });
    });
  }

  private setupActiveSectionObserver() {
    const sections = Array.from(this.resumeContainer.nativeElement.querySelectorAll('section[id]')) as HTMLElement[];
    if (!sections.length) return;

    // Use a rootMargin so the section near the middle/top becomes active
  this.sectionObserver = new IntersectionObserver((entries) => {
      // pick the most visible entry
      let visible: IntersectionObserverEntry | null = null;
      for (const e of entries) {
        if (e.isIntersecting) {
          if (!visible || e.intersectionRatio > visible.intersectionRatio) visible = e;
        }
      }
      if (visible && visible.target && (visible.target as Element).id) {
        const id = (visible.target as Element).id;
        this.updateActiveLinks(id);
      }
  }, { root: null, threshold: [0.25, 0.5], rootMargin: '-10% 0px -30% 0px' });

    sections.forEach(s => this.sectionObserver!.observe(s));
    // set initial active based on current viewport — pick section closest to viewport center
    const viewportMid = window.innerHeight / 2;
    let closest: HTMLElement | null = null;
    let minDist = Infinity;
    sections.forEach(s => {
      const rect = s.getBoundingClientRect();
      const dist = Math.abs(rect.top - viewportMid);
      if (dist < minDist) { minDist = dist; closest = s; }
    });
  if (closest) this.updateActiveLinks((closest as HTMLElement).id);
  }

  private updateActiveLinks(id: string) {
    const container = this.resumeContainer.nativeElement;
    const links = container.querySelectorAll('a[href^="#"]');
    links.forEach((l: HTMLAnchorElement) => {
      const href = l.getAttribute('href') || '';
      const targetId = href.startsWith('#') ? href.substring(1) : '';
      if (targetId === id) l.classList.add('active'); else l.classList.remove('active');
    });
    // also update side panel links outside the resume-page (if any)
    const sideLinks = document.querySelectorAll('.resume-side-panel a[href^="#"]');
    sideLinks.forEach((l: Element) => {
      const ah = (l as HTMLAnchorElement).getAttribute('href') || '';
      const tid = ah.startsWith('#') ? ah.substring(1) : '';
      if (tid === id) l.classList.add('active'); else l.classList.remove('active');
    });
  }

  openTranscript(fileName: string) {
    const safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`assets/${fileName}`);
    this.showTranscript = safeUrl;
  }

  closeTranscript() {
    this.showTranscript = null;
  }
}