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
  {
    question: "What other projects have you done? What other technologies you have worked on?", 
    answer:"Apart from projects shown in the project section, I have developed  'Sona Discussion Forum', an online platform for discussing doubts amoung professors and students at Sona. I have also developed 'Coding Assistant', a window application where you can code by speaking. I have been involved in developing online application to estimate budget for NCC, Salem. Likewise I have worked on 'PackXpress', an online platform for courier service. Apart from these, I have also worked on Selenium (Java) for automation testing for web application." 
  },
  {
    question: "What is more important? Programming language or the logic?", 
    answer:"Programming language is just a tool to implement the solution. The solution comes from the well framed logic. So yes, the logic is more important. At the same time, knowing the features of language matters too, especially while implementing the solution in the efficient way."
  },
  {
    question: "How important is team for you?", 
    answer:"I believe in teamwork. Team mates are required for pair programming, code reviews, helping each other when stuck, and most importantly having fun at work."
  },
  {
    question: "What is your favourite part in software development?",
    answer:"My favourite part in software development is analysis and coming up with the solution (logic). Although I work on full stack, I like the backend more. That's where I enjoy implementing my solution. Even in the front end, I love coding in javascript/typescript more than writing html script."
  },
  {
    question: "Any thoughts on doing project in mobile development?", 
    answer:"Yes, I am looking for the opportunity."
  },
  {
    question: "Apart from web development, what interest you?",
    answer:"During my Computer Science programme at College, I was amazed by the concepts used in Data Science, Machine Learning and Artificial Intelligence. I am interested to explore these fields."
  },
  {
    question: "How do you keep up with the other technologies when you are working on a particular technology?", 
    answer:"It is true that you tend to forget other technologies once you start working on one particular technology. I tend to forget Python syntax when I am working with Java and vice versa. But a small brush up is enough to recall the syntax. However, I keep revising the core concepts  like Data structures and Algorithms, DBMS etc from time to time. To keep up with my programming skills, I do solve online problems at Hackerrank, and Hackerearth. Apart from these, I read tech blogs to keep myself updated."
  },
  {
    question: "What is your favourite quote that keeps you motivated at work?", 
    answer:"If you ask me a question, and if I don't know the answer, I am going to say that I don't know. But I know how to find the answer and I bet I will find the answer. -The Pursuit of Happyness"
  },
  {
    question: "What do you do in your free time?", 
    answer:"I love exploring places. So whenever it is possible, I do travelling. I like to think myself as a sports person. I play cricket, volleyball, badminton. When bored, I do watch tv series."
  }
];
}
