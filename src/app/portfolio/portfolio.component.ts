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
    {id:11, name:'Reviews Sentiment Analysis', year: 2025, summary: 'Analyzes product reviews to identify issues, customer sentiment, and areas for improvement to help enhance product quality and customer satisfaction', description: 'lorem ipsum', url: '', pictures: [], tags:['Scraping','OpenAI API','SerpAPI','Angular','Flask','Python']},
    {id:10, name:'Indiana Toxicity Watch 👑', year:2024, summary: ' Interactive platform that maps toxic chemical risks across Indiana, helping users and policy makers make informed decisions about environmental health', description: 'lorem ipsum', url: 'https://github.com/suhaasbadada/jimmy_johns', pictures: ['assets/itw1.png','assets/itw2.png','assets/itw3.png','assets/itw4.png','assets/itw5.png','assets/itw6.png'], tags:['ML','Power BI','Data Analysis','Flask','React','Python','HTML','CSS']},
    {id:9, name:'VocabCards', year: 2023, summary: 'Personalized vocabulary learning platform for GRE aspirants incorporating progress tracking and gamified elements', description: 'lorem ipsum', url: 'https://github.com/suhaasbadada/VocabCards', pictures: ['assets/vc1.png','assets/vc2.png','assets/vc3.png','assets/vc4.png'], tags:['Angular','ASP.NET Web API','SQL','Azure','Firebase','MaterialUI','SSMS']},
    {id:8, name:'ResuSight', year: 2023, summary: 'Innovative platform that helps job seekers streamline their interview preparation by analyzing resumes and generating tailored interview questions, powered by AI', description: 'lorem ipsum', url: 'https://github.com/suhaasbadada/ResuSight', pictures: ['assets/rs1.png','assets/rs2.png','assets/rs3.png','assets/rs4.png'], tags:['OpenAI API','Langchain','Flask','MongoDB','Strawberry-GraphQL','Python']},
    {id:7, name:'Am I Okay 👑', year: 2022, summary: 'Diagnostic tool that predicts diseases based on symptoms, offers precautionary measures and provides nearest locations for treatment', description: 'lorem ipsum', url: 'https://devpost.com/software/amiok', pictures: ['assets/amiok1.png','assets/amiok2.png','assets/amiok3.png'], tags:['ML','Google Cloud API','Flask','Javascript','jQuery','HTML','CSS']},
    {id:6, name:'Resume Generator', year:2022, summary: 'Application to simplify resume creation. Fill in details, choose from multiple templates generated from user details', description: 'lorem ipsum', url: 'https://github.com/suhaasbadada/ResumeGenerator', pictures: ['assets/rg1.png','assets/rg2.png','assets/rg3.png','assets/rg4.png','assets/rg5.png','assets/rg6.png','assets/rg7.png','assets/rg8.png','assets/rg9.png'], tags:['Flask','Firebase','Python','Javascript','HTML','CSS']},
    {id:5, name:'MVBT Encryptor', year: 2021, summary: 'Multi-level encryption scheme combining a Modified Vigenere Cipher with binary tree traversal and ASCII manipulation while maintaining efficiency for various input types', description: 'lorem ipsum', url: 'https://github.com/suhaasbadada/MVBT-Encryptor', pictures: ['assets/mvbt1.png','assets/mvbt2.png','assets/mvbt3.png'], tags:['Cybersec','Flask','Python','HTML','CSS']},
    {id:4, name:'Food Decision Helper', year: 2021, summary: 'ML-based application that provides comfort foods based on mood inputs and recommending similar restaurants based on user-provided restaurant data.', description: 'lorem ipsum', url: 'https://github.com/suhaasbadada/Food-Decision-Helper', pictures: ['assets/fdh1.png','assets/fdh2.png','assets/fdh3.png','assets/fdh4.png','assets/fdh5.png'], tags:['ML','Flask','Python','HTML','CSS']},
    {id:3, name:'Caesar Cipher Encryption', year: 2021, summary: 'Simple Python GUI using Tkinter to visualize Caesar Cipher encryption technique', description: 'lorem ipsum', url: 'https://github.com/suhaasbadada/Caesar-Cipher-Tkinter-', pictures: ['assets/cc1.png','assets/cc2.png'], tags:['Cybersec','Tkinter','Python']},
    {id:2, name:'Book Recommendation Engine', year: 2021, summary: 'Collected book datasets and applied machine learning techniques to generate personalized book recommendations based on title, language, and genre.', description: 'lorem ipsum', url: 'https://github.com/suhaasbadada/Book-Recommendation-Engine-Recommender-System', pictures: ['assets/bre1.png'], tags:['ML','Python','Jupyter']},
    {id:1, name:'Loan Pay Analysis', year: 2020, summary: 'Initial step towards ML, worked with a Phd candidate from IIM Lucknow to analyze multiple datasets from different countries to correlate and predict an individual\'s capacity to repay loan', description: 'lorem ipsum', url: 'https://github.com/suhaasbadada/Loan-Pay-Analysis', pictures: ['assets/lpa1.png'], tags:['ML','Python','Jupyter']},
    {id:0, name:'Shop Management System', year: 2020, summary: 'Comprehensive DBMS for small-scale sellers and local distributors. It includes features for inventory management, order processing, customer tracking, and sales analysis', description: 'lorem ipsum', url: 'https://github.com/suhaasbadada/shop-management-system', pictures: ['assets/sms1.png','assets/sms2.png','assets/sms3.png','assets/sms4.png','assets/sms5.png','assets/sms6.png','assets/sms7.png','assets/sms8.png','assets/sms9.png'], tags:['PHP','MySQL','HTML','CSS']},
  ]
  
  constructor(private titleService: Title) {
    this.titleService.setTitle("Suhaas-Portfolio");
  }
}
