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
  generateId(i:number, s:string){    
    let res = "myproj"+i;
    if(s=='#') res = "#"+res;    
    return res;
  }
  
  myprojects = [
    {
      "title": "Verisoft-Lab","domain":"Health" ,
      "tech":["Java","Spring boot","REST", "MySQL", "Angular 6", "HTML5", "Bootstrap", "Javascript"],
      "description":"A web application for pathology lab management that provides a platform to make patient's entry, manage test's data and generate bill and report",
      "responsibilities":["Involved in understanding the business requirements from the client", "Designing database schema", "Implementing REST service to be consumed by the front end", "Securing the REST end points"]
    },

    {
      "title": "Ekart","domain":"ECommerce" ,
      "tech":["Java","Spring boot","REST", "MySQL", "Angular 6", "HTML5", "CSS", "Bootstrap", "Typescript"],
      "description":"An end-to-end single page web application for buying and selling the products",
      "responsibilities":["Understanding user stories and developing back end points of the services (controllers)", "Developing UI, validation logic, and calling backend services from the frontend"]
    },
    
    {
      "title": "CLI Monitoring Portal","domain":"Railway" ,
      "tech":["PHP", "MySQL", "HTML5", "CSS","Javascript", "Bootstrap", "JQuery"],
      "description":"An online web based Integrated Performance Assessment & Monitoring System for Loco running staff(IPMAS) for Southern Railway, Salem, Tamil Nadu. An online platform for storing the officer's assessment's data and tracking their location during duty",
      "responsibilities":["Involved in coordinating with the client", "Understanding the business requirements", "Leading the team towards development of website and android app"]
    },

    {
      "title": "My Favourite Movies","domain":"Entertainment" ,
      "tech":["Angular 6", "HTML5", "CSS", "Bootstrap", "Typescript"],
      "description":"Angular app created to demonstrate CRUD operation using in-memory API (to simulate REST api)",
      "responsibilities":["Involved in designing and developing the site", "Implementing service to interact with data from in-memory database"]
    }
  ]
}
