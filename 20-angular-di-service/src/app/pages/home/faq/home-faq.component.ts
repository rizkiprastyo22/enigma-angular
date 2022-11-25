import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-faq',
  templateUrl: './home-faq.component.html',
  styleUrls: ['./home-faq.component.scss']
})
export class HomeFaqComponent implements OnInit {

  // data array object
  faq = [{
    question: 'Where are Exactly?',
    answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas nesciunt quaerat eius corrupti at, doloribus molestiae culpa! Dolorem, voluptate voluptatem necessitatibus cumque sapiente eos non ullam obcaecati molestiae ut repellendus!'
  },
  {
    question: 'How Much Does it cost to attend?',
    answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas nesciunt quaerat eius corrupti at, doloribus molestiae culpa! Dolorem, voluptate voluptatem necessitatibus cumque sapiente eos non ullam obcaecati molestiae ut repellendus!'
  },
  {
    question: 'What Do I Need to Know?',
    answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas nesciunt quaerat eius corrupti at, doloribus molestiae culpa! Dolorem, voluptate voluptatem necessitatibus cumque sapiente eos non ullam obcaecati molestiae ut repellendus!'

  },
  {
    question: 'How do I Sign Up?',
    answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas nesciunt quaerat eius corrupti at, doloribus molestiae culpa! Dolorem, voluptate voluptatem necessitatibus cumque sapiente eos non ullam obcaecati molestiae ut repellendus!'
  },
  {
    question: 'Do you help me?',
    answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas nesciunt quaerat eius corrupti at, doloribus molestiae culpa! Dolorem, voluptate voluptatem necessitatibus cumque sapiente eos non ullam obcaecati molestiae ut repellendus!'
  }]

  // style binding
  styles = {
    color: 'gold',
    fontSize: '2rem',
    fontWeight: '100'
  }

  // inner html
  faqQuestion = '<strong>FAQ</strong> Question'

  constructor() { }

  ngOnInit(): void {
  }

}
