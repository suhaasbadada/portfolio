import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
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
      description: 'Awarded 1st place for fastest typing during the Typing Competition at Luddy School of Informatics.'
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
          const offset = 80; // Offset for sticky header
          const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: elementPosition - offset,
            behavior: 'smooth'
          });
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