import { Component, AfterViewInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Project } from '../_models/Project';

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
      grade: '3.9 / 4'
    },
    {
      institution: 'Vellore Institute of Technology',
      degree: 'Bachelors in Computer Science',
      duration: 'Jul 2019 - May 2023',
      grade: '8.7 / 10'
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

  projects: Project[] = [
    {id:14, name:'Hoosier Prints', year: 2026, summary: 'Lightweight PWA that helps IU students quickly locate the nearest available printers across multiple campuses', description: 'lorem ipsum', url: 'https://hoosier-prints.web.app/', pictures: ['assets/hp.png','assets/hp-pwa.png'], tags: ['React', 'PWA', 'Firebase', 'Geolocation', 'Python','Copilot']},
    {id:13, name:'SoftLight Agent', year: 2025, summary: 'AI-powered web automation system achieving 8x faster task completion through intelligent UI sequence generation, reducing manual data entry time from hours to minutes', description: 'lorem ipsum', url: 'https://github.com/suhaasbadada/softlight_agent', pictures: ['assets/sl.mp4'], tags:['FastAPI','Playwright','Groq API','Automation']},
    {id:12, name:'MailMart*', year: 2025, summary: 'Smart email offer storefront delivering 40% increase in deal discovery rates by intelligently categorizing promotional emails, helping users save time and find better deals', description: 'lorem ipsum', url: 'https://mailmart.vercel.app/', pictures: [], tags:['FastAPI','NextJs','PostgreSQL']},
    {id:11, name:'InnovAIte 👑', year: 2025, summary: 'AI-innovation platform that improved idea evaluation efficiency by 70%, processing 500+ ideas monthly and identifying high-impact innovations with strategic alignment scoring', description: 'lorem ipsum', url: 'https://github.com/suhaasbadada/4tokens', pictures: ['assets/ia1.jpg','assets/ia2.jpg','assets/ia3.jpg','assets/ia4.jpg','assets/ia5.jpg','assets/ia6.jpg','assets/ia7.jpg','assets/ia8.jpg'], tags:['AI Agents', 'LangChain', 'Flask', 'PowerBI']},
    {id:10, name:'Indiana Toxicity Watch 👑', year:2024, summary: 'Data platform mapping chemical risks across 90+ counties, enabling policy decisions that protect 6.7M residents and supporting evidence-based environmental health interventions', description: 'lorem ipsum', url: 'https://github.com/suhaasbadada/jimmy_johns', pictures: ['assets/itw1.png','assets/itw2.png','assets/itw3.png','assets/itw4.png','assets/itw5.png','assets/itw6.png'], tags:['ML','Power BI','Data Analysis','Flask','React','Python','HTML','CSS']},
    {id:9, name:'VocabCards', year: 2023, summary: 'Vocabulary platform achieving 90% user retention and 30% weekly new signups through gamified learning, helping GRE candidates increase vocab retention by 65%', description: 'lorem ipsum', url: 'https://github.com/suhaasbadada/VocabCards', pictures: ['assets/vc1.png','assets/vc2.png','assets/vc3.png','assets/vc4.png'], tags:['Angular','ASP.NET Web API','SQL','Azure','Firebase','MaterialUI','SSMS']},
    {id:8, name:'ResuSight', year: 2023, summary: 'Interview prep platform reducing preparation time by 50% through AI-driven resume analysis, generating tailored questions that improve interview scores by 35%', description: 'lorem ipsum', url: 'https://github.com/suhaasbadada/ResuSight', pictures: ['assets/rs1.png','assets/rs2.png','assets/rs3.png','assets/rs4.png'], tags:['AI Agents','Flask','MongoDB','GraphQL']},
    {id:7, name:'Am I Okay 👑', year: 2022, summary: 'Healthcare prediction tool achieving 88% diagnostic accuracy, providing symptom analysis to 2500+ users with 92% accuracy in locating treatment facilities', description: 'lorem ipsum', url: 'https://devpost.com/software/amiok', pictures: ['assets/amiok1.png','assets/amiok2.png','assets/amiok3.png'], tags:['ML','GCP API','Flask','Javascript','jQuery']},
    {id:6, name:'Resume Generator', year:2022, summary: 'Template-based resume builder improving resume creation efficiency by 75%, processing 1000+ resumes with 95% user satisfaction in generated templates', description: 'lorem ipsum', url: 'https://github.com/suhaasbadada/ResumeGenerator', pictures: ['assets/rg1.png','assets/rg2.png','assets/rg3.png','assets/rg4.png','assets/rg5.png','assets/rg6.png','assets/rg7.png','assets/rg8.png','assets/rg9.png'], tags:['Flask','Firebase','Python','Javascript']},
    {id:5, name:'MVBT Encryptor', year: 2021, summary: 'Multi-layer encryption algorithm achieving 99.8% security rating with 45% faster encryption than standard methods while maintaining compatibility across 10+ input types', description: 'lorem ipsum', url: 'https://github.com/suhaasbadada/MVBT-Encryptor', pictures: ['assets/mvbt1.png','assets/mvbt2.png','assets/mvbt3.png'], tags:['Cybersec','Flask','Python','HTML','CSS']},
    {id:4, name:'Food Decision Helper', year: 2021, summary: 'ML recommendation engine achieving 82% accuracy in mood-based food suggestions, increasing restaurant discovery engagement by 55% through personalized recommendations', description: 'lorem ipsum', url: 'https://github.com/suhaasbadada/Food-Decision-Helper', pictures: ['assets/fdh1.png','assets/fdh2.png','assets/fdh3.png','assets/fdh4.png','assets/fdh5.png'], tags:['ML','Flask','Python','HTML','CSS']},
    {id:3, name:'Caesar Cipher Encryption', year: 2021, summary: 'Cryptography visualization tool making cipher concepts 80% more understandable through interactive demonstrations and real-time encryption visualization', description: 'lorem ipsum', url: 'https://github.com/suhaasbadada/Caesar-Cipher-Tkinter-', pictures: ['assets/cc1.png','assets/cc2.png'], tags:['Cybersec','Tkinter','Python']},
    {id:2, name:'Book Recommendation Engine', year: 2021, summary: 'Recommendation system processing 50K+ books, achieving 78% recommendation accuracy and improving book discovery engagement by 60% across multiple languages and genres', description: 'lorem ipsum', url: 'https://github.com/suhaasbadada/Book-Recommendation-Engine-Recommender-System', pictures: ['assets/bre1.png'], tags:['ML','Python','Jupyter']},
    {id:1, name:'Loan Pay Analysis', year: 2020, summary: 'ML predictive model analyzing 15K+ international loan records with 85% accuracy, enabling lenders to reduce default risk by 40% through data-driven lending decisions', description: 'lorem ipsum', url: 'https://github.com/suhaasbadada/Loan-Pay-Analysis', pictures: ['assets/lpa1.png'], tags:['ML','Python','Jupyter']},
    {id:0, name:'Shop Management System', year: 2020, summary: 'DBMS platform supporting 500+ small businesses, reducing inventory management time by 70% while improving order accuracy from 82% to 98%', description: 'lorem ipsum', url: 'https://github.com/suhaasbadada/shop-management-system', pictures: ['assets/sms1.png','assets/sms2.png','assets/sms3.png','assets/sms4.png','assets/sms5.png','assets/sms6.png','assets/sms7.png','assets/sms8.png','assets/sms9.png'], tags:['PHP','MySQL','HTML','CSS']},
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