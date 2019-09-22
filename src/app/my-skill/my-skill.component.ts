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

  skills = [
    {title:"Java",category: "language",logo:"java.png", link:"https://www.java.com/"},
    {title:"Python",category: "language", logo:"python.png", link:"https://www.python.org/"},
    {title:"C#",category: "language", logo:"csharp.png", link:"https://docs.microsoft.com/en-us/dotnet/csharp/tutorials/"},
    {title:"PHP",category: "language", logo:"php.png", link:"https://www.php.net/"},

    {title:"Spring", category: "framework", logo:"spring.png", link:"https://spring.io/"},
    {title:"Angular", category: "framework",logo:"angular.png", link:"https://spring.io/"},
    {title:".NET", category: "framework",logo:"dotnet.png", link:"https://dotnet.microsoft.com/"},

    // add orm : hibernate and EF

    {title:"HTML 5",category: "web development", logo:"html5.png", src:"" ,link:"https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"},
    {title:"CSS ",category: "web development", logo:"css3.png", link:"https://developer.mozilla.org/en-US/docs/Archive/CSS3"},
    {title:"Javascript", category: "web development",logo:"javascript.png", link:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"},
    // add typescript
    {title:"Bootstrap",category: "web development", logo:"bootstrap.png", link:"https://getbootstrap.com"},

    {title:"My SQL", category: "database", logo:"mysql.png", src:"" ,link:"https://www.mysql.com/"},
    {title:"MSSQL", category: "database",logo:"mssql.png", link:"https://www.microsoft.com/en-us/sql-server/sql-server-2019"},
    {title:"Mongo DB",category: "database", logo:"mongodb.png", link:"https://www.mongodb.com/"},

    {title:"Git",category: "others", logo:"git.png", link:"https://git-scm.com/"},
    {title:"Source Tree",category: "others", logo:"sourcetree.png", link:"https://www.sourcetreeapp.com/"},
    {title:"Postman", category: "others",logo:"postman.png", link:"https://www.getpostman.com"},
    {title:"Scrum",category: "others", logo:"scrum.png", link:"https://www.scrum.org/"},

    {title:"Eclipse", category: "ide", logo:"eclipse.png", src:"" ,link:"https://www.eclipse.org/"},
    {title:"Spring Tool Suite",  category: "ide", logo:"sts.png", link:"https://spring.io/tools3/sts/all"},
    {title:"VS Code", category: "others", logo:"vscode.png", link:"https://code.visualstudio.com/"},
    // add visual studio 
  ];
}
