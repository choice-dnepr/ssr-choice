import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about-company-section',
  templateUrl: './about-company-section.component.html',
  styleUrls: ['./about-company-section.component.scss']
})
export class AboutCompanyComponent implements OnInit {
  public designateWords: string[] = ['я', 'choice', 'возможности'];


  constructor() {}

  ngOnInit(): void {}
}
