import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkModeSubject = new BehaviorSubject<boolean>(this.isDarkMode());
  public darkMode$: Observable<boolean> = this.darkModeSubject.asObservable();
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.applyTheme(this.isDarkMode());
  }

  private isDarkMode(): boolean {
    if (!this.isBrowser) {
      return true; // Default to dark mode on server
    }
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) {
      return saved === 'true';
    }
    return true; // Default to dark mode
  }

  toggleTheme(): void {
    const newDarkMode = !this.darkModeSubject.value;
    this.darkModeSubject.next(newDarkMode);
    if (this.isBrowser) {
      localStorage.setItem('darkMode', newDarkMode.toString());
    }
    this.applyTheme(newDarkMode);
  }

  private applyTheme(isDark: boolean): void {
    if (!this.isBrowser) return;
    const root = document.documentElement;
    if (isDark) {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.setAttribute('data-theme', 'light');
    }
  }

  isDarkModeActive(): boolean {
    return this.darkModeSubject.value;
  }
}
