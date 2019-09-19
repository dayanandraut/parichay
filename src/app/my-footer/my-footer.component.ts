import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-footer',
  templateUrl: './my-footer.component.html',
  styleUrls: ['./my-footer.component.css']
})
export class MyFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  phone = "+918508632484";
  email = "dayanandraut2015@gmail.com";
  git = "https://github.com/dayanandraut/";
  linkedin = "https://www.linkedin.com/in/dayanand-raut-9b1845129";
  facebook = "https://www.facebook.com/dayanand.raut.5";
  quora = "https://www.quora.com/profile/Dayanand-Raut";
}
