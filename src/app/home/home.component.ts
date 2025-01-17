import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle("Suhaas-Home");
  }

  urls=[
    {name:"Linkedin",url:"https://www.linkedin.com/in/suhaasbadada/"},
    {name:"Github",url:"https://github.com/suhaasbadada/"},
    {name:"Leetcode",url:"https://leetcode.com/suhaasbadada/"},
    {name:"Instagram",url:"https://www.instagram.com/suhaasbadada/"}
  ]

  about="dije";
}
