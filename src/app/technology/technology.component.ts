import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  languages = [
    {title:"Java", logo:"java.jpg", link:"https://www.java.com/"},
    {title:"Python", logo:"python.jpg", link:"https://www.python.org/"},
    {title:"C#", logo:"csharp.jpg", link:"https://docs.microsoft.com/en-us/dotnet/csharp/tutorials/"},
    {title:"PHP", logo:"php.jpg", link:"https://www.php.net/"}
  ];
}
