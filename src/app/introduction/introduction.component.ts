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
  intro = "   Graduated in BE-CSE from Sona College of Technology in May 2018, I have been working as a full stack developer at Infosys since June 2018. I keep on learning, unlearning and relearninig the tools and technology to come up with the best solution to the problem.     "
}
