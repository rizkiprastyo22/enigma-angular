import { Component, OnInit } from '@angular/core';
import { Instructors } from './model/home-instructors.model';

@Component({
  selector: 'app-home-instructors',
  templateUrl: './home-instructors.component.html',
  styleUrls: ['./home-instructors.component.scss']
})
export class HomeInstructorsComponent implements OnInit {

  instructors: Instructors[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getInstructors();
  }

  getInstructors(): void {
    const instructors: Instructors[] = [
    {
      name: 'Anjeun',
      testimoni: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati minus in facilis architecto laborum magnam impedit vel esse blanditiis quae perferendis necessitatibus, placeat ut eaque? Possimus amet quisquam asperiores beatae!',
      img: 'https://randomuser.me/api/portraits/men/47.jpg',
      socialMedia: [{
        icon: 'bi bi-twitter',
        link: 'https://www.twitter.com'
      },
      {
        icon: 'bi bi-facebook',
        link: ''
      },
      {
        icon: 'bi bi-linkedin',
        link: ''
      },
      {
        icon: 'bi bi-instagram',
        link: ''
      }]
    },
    {
      name: 'Saha',
      testimoni: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati minus in facilis architecto laborum magnam impedit vel esse blanditiis quae perferendis necessitatibus, placeat ut eaque? Possimus amet quisquam asperiores beatae!',
      img: 'https://randomuser.me/api/portraits/women/30.jpg',
      socialMedia: [{
        icon: 'bi bi-twitter',
        link: ''
      },
      {
        icon: 'bi bi-facebook',
        link: ''
      },
      {
        icon: 'bi bi-linkedin',
        link: ''
      },
      {
        icon: 'bi bi-instagram',
        link: ''
      }]
    },
    {
      name: 'Dewek',
      testimoni: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati minus in facilis architecto laborum magnam impedit vel esse blanditiis quae perferendis necessitatibus, placeat ut eaque? Possimus amet quisquam asperiores beatae!',
      img: 'https://randomuser.me/api/portraits/men/24.jpg',
      socialMedia: [{
        icon: 'bi bi-twitter',
        link: ''
      },
      {
        icon: 'bi bi-facebook',
        link: ''
      },
      {
        icon: 'bi bi-linkedin',
        link: ''
      },
      {
        icon: 'bi bi-instagram',
        link: ''
      }]
    },
    {
      name: 'Aing',
      testimoni: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati minus in facilis architecto laborum magnam impedit vel esse blanditiis quae perferendis necessitatibus, placeat ut eaque? Possimus amet quisquam asperiores beatae!',
      img: 'https://randomuser.me/api/portraits/women/21.jpg',
      socialMedia: [{
        icon: 'bi bi-twitter',
        link: ''
      },
      {
        icon: 'bi bi-facebook',
        link: ''
      },
      {
        icon: 'bi bi-linkedin',
        link: ''
      },
      {
        icon: 'bi bi-instagram',
        link: ''
      }]
    }
  ]

    this.instructors = instructors
  }

}
