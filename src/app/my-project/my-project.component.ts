import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-project',
  templateUrl: './my-project.component.html',
  styleUrls: ['./my-project.component.css']
})
export class MyProjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  myprojects = [
    {"title": "Verisoft-Lab","domain":"Health" ,"tech":["Java","Spring boot","REST", "MySQL"]},
    {"title": "Ekart","domain":"ECommerce" ,"tech":["Java","Spring boot","REST", "MySQL", "Angular 6", "HTML5", "CSS", "Bootstrap", "Typescript"]},
    {"title": "CLI Monitoring Portal","domain":"Railway" ,"tech":["PHP", "MySQL", "HTML5", "CSS","Javascript", "Bootstrap", "JQuery"]},
    {"title": "My Favourite Movies","domain":"Entertainment" ,"tech":["Angular 6", "HTML5", "CSS", "Bootstrap", "Typescript"]}
  ]
}
