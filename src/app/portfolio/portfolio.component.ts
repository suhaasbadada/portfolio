import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
@Component({
  selector: 'app-portfolio',
  standalone: false,
  
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  projects: Project[] = [
    {id:11, name:'Reviews Sentiment Analysis', year: 2025, summary: 'lorem ipsum', description: 'lorem ipsum', url: '', pictures: [], tags:['Scraping','OpenAI API','SerpAPI','Angular','Flask','Python']},
    {id:10, name:'Indiana Toxicity Watch 👑', year:2024, summary: 'lorem ipsum', description: 'lorem ipsum', url: 'https://github.com/suhaasbadada/jimmy_johns', pictures: [], tags:['ML','Power BI','Data Analysis','Flask','React','Python','HTML','CSS']},
    {id:9, name:'VocabCards', year: 2023, summary: 'lorem ipsum', description: 'lorem ipsum', url: 'https://github.com/suhaasbadada/VocabCards', pictures: [], tags:['Angular','ASP.NET Web API','SQL','Azure','Firebase','MaterialUI','SSMS']},
    {id:8, name:'ResuSight', year: 2023, summary: 'lorem ipsum', description: 'lorem ipsum', url: '', pictures: [], tags:['OpenAI API','Langchain','Flask','MongoDB','Strawberry-GraphQL','Python']},
    {id:7, name:'Am I Okay 👑', year: 2022, summary: 'lorem ipsum', description: 'lorem ipsum', url: 'https://devpost.com/software/amiok', pictures: [], tags:['ML','Google Cloud API','Flask','Javascript','jQuery','HTML','CSS']},
    {id:6, name:'Resume Generator', year:2022, summary: 'lorem ipsum', description: 'lorem ipsum', url: 'https://github.com/suhaasbadada/ResumeGenerator', pictures: [], tags:['Flask','Firebase','Python','Javascript','HTML','CSS']},
    {id:5, name:'MVBT Encryptor', year: 2021, summary: 'lorem ipsum', description: 'lorem ipsum', url: 'https://github.com/suhaasbadada/MVBT-Encryptor', pictures: [], tags:['Cybersec','Flask','Python','HTML','CSS']},
    {id:4, name:'Food Decision Helper', year: 2021, summary: 'lorem ipsum', description: 'lorem ipsum', url: 'https://github.com/suhaasbadada/Food-Decision-Helper', pictures: [], tags:['ML','Flask','Python','HTML','CSS']},
    {id:3, name:'Caesar Cipher Encryption', year: 2021, summary: 'lorem ipsum', description: 'lorem ipsum', url: 'https://github.com/suhaasbadada/Caesar-Cipher-Tkinter-', pictures: [], tags:['Cybersec','Tkinter','Python']},
    {id:2, name:'Book Recommendation Engine', year: 2021, summary: 'lorem ipsum', description: 'lorem ipsum', url: 'https://github.com/suhaasbadada/Book-Recommendation-Engine-Recommender-System', pictures: [], tags:['ML','Python','Jupyter']},
    {id:1, name:'Loan Pay Analysis', year: 2020, summary: 'lorem ipsum', description: 'lorem ipsum', url: 'https://github.com/suhaasbadada/Loan-Pay-Analysis', pictures: [], tags:['ML','Python','Jupyter']},
    {id:0, name:'Shop Management System', year: 2020, summary: 'lorem ipsum', description: 'lorem ipsum', url: 'https://github.com/suhaasbadada/shop-management-system', pictures: [], tags:['PHP','MySQL','HTML','CSS']},
  ]
  
  constructor(private titleService: Title) {
    this.titleService.setTitle("Suhaas-Portfolio");
  }
}
