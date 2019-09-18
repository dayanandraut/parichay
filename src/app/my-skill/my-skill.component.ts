import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-skill',
  templateUrl: './my-skill.component.html',
  styleUrls: ['./my-skill.component.css']
})
export class MySkillComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  languages = [
    {title:"Java", logo:"language/java.png", link:"https://www.java.com/"},
    {title:"Python", logo:"language/python.png", link:"https://www.python.org/"},
    {title:"C#", logo:"language/csharp.png", link:"https://docs.microsoft.com/en-us/dotnet/csharp/tutorials/"},
    {title:"PHP", logo:"language/php.png", link:"https://www.php.net/"}
  ];

  web_development = [
    {title:"HTML 5", logo:"webdev/html5.png", src:"" ,link:"https://www.java.com/"},
    {title:"CSS ", logo:"webdev/css3.png", link:"https://www.python.org/"},
    {title:"Javascript", logo:"webdev/javascript.png", link:"https://docs.microsoft.com/en-us/dotnet/csharp/tutorials/"},
    {title:"Bootstrap", logo:"webdev/bootstrap.png", link:"https://www.php.net/"}
  ];
  database = [
    {title:"My SQL", logo:"db/mysql.png", src:"" ,link:"https://www.java.com/"},
    {title:"MSSQL", logo:"db/mssql.png", link:"https://www.python.org/"},
    {title:"Mongo DB", logo:"db/mongodb.png", link:"https://docs.microsoft.com/en-us/dotnet/csharp/tutorials/"}
   
  ];

  framework = [
    {title:"Spring", logo:"framework/spring.png", src:"" ,link:"https://www.java.com/"},
    {title:"Angular", logo:"framework/angular.png", link:"https://www.python.org/"},
    {title:".NET", logo:"framework/dotnet.png", link:"https://www.python.org/"} 
  ];

  ide = [
    {title:"Eclipse", logo:"ide/eclipse.png", src:"" ,link:"https://www.java.com/"},
    {title:"Spring Tool Suite", logo:"ide/sts.png", link:"https://www.python.org/"},
    {title:"VS Code", logo:"ide/vscode.png", link:"https://www.python.org/"}   
  ];

  others = [
    {title:"Git", logo:"other/git.png", src:"" ,link:"https://www.java.com/"},
    {title:"Source Tree", logo:"other/sourcetree.png", link:"https://www.python.org/"},
    {title:"Postman", logo:"other/postman.png", link:"https://www.python.org/"},
    {title:"Scrum", logo:"other/scrum.png", link:"https://www.python.org/"}  

  ]
  technology = [
    {"category":"Language", "data":this.languages}, 
    {"category":"Web Development", "data":this.web_development},
    {"category":"Database", "data":this.database},
    {"category":"Framework", "data":this.framework},
    {"category":"IDE", "data":this.ide},
    {"category":"Others", "data":this.others}
  ];
}
