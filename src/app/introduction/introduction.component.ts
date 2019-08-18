import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  firstName = "Dayanand";
  lastName = "Raut";
  designantion = "< Full Stack Developer />";
  intro = "   Young CS graduate having passion of delivering the quality code in agile manner   "
}
