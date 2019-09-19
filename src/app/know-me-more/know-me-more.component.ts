import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-know-me-more',
  templateUrl: './know-me-more.component.html',
  styleUrls: ['./know-me-more.component.css']
})
export class KnowMeMoreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
faq = [
  {question: "What is more important? Programming language or the idea?", answer:"cde"},
  {question: "How important is team for you?", answer:"123"},
  {question: "What is your favourite part in software development?", answer:"123"},
  {question: "Any thoughts on doing mobile development?", answer:"123"},
  {question: "Apart from web development, what interest you?", answer:"123"},
  {question: "How do you keep up with the other technologies when you are working on a particular technology?", answer:"123"},
  {question: "What is your favourite quote that keeps you motivated at work?", answer:"123"},
  {question: "What do you do in your free time?", answer:"123"}
];
}
