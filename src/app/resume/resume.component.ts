import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ResumeComponent implements AfterViewInit {
  @ViewChild('resumeContainer') resumeContainer!: ElementRef;

  constructor(private sanitizer: DomSanitizer) {}

  certifications_urls = [
    { name: 'Python for DS and ML', url: 'https://www.udemy.com/certificate/UC-3014b25b-4aae-4f07-8921-f80dbe586b8c/' },
    { name: 'Angular and ASP.NET core', url: 'https://www.udemy.com/certificate/UC-7f30281f-8e37-45a5-89f7-3aca2116427d/' },
    { name: 'Docker and Kubernetes', url: 'https://www.udemy.com/certificate/UC-ed2a918f-7b55-4abf-8a8c-bf338cc6ce41/' }
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
      description: 'Won the said hackathon for building InnovAIte...'
    },
    {
      name: 'Vernon Clapp IDEA Competition Semifinalist',
      description: 'Was one of the semifinalists for proposing MailMart...'
    },
    {
      name: 'Luddy Hackathon Third Edition Winner',
      description: 'Won the said hackathon for developing the Indiana Toxicity Watch...'
    },
    {
      name: 'MLH Hoya Hacks Google Cloud Track Winner',
      description: 'Won the said hackathon for developing a machine learning-based diagnostic tool...'
    },
    {
      name: 'Typing Competition Luddy',
      description: 'Awarded 1st place for fastest typing...'
    }
  ];

  showTranscript: SafeResourceUrl | null = null;


  ngAfterViewInit() {
    if (this.resumeContainer) {
      this.setupSmoothScrolling();
    }
  }

  private setupSmoothScrolling() {
    const links = this.resumeContainer.nativeElement.querySelectorAll('.section-nav a');
    links.forEach((link: HTMLAnchorElement) => {
      link.addEventListener('click', (e: Event) => {
        e.preventDefault();
        const targetId = link.getAttribute('href')?.substring(1) ?? '';
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
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
