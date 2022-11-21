import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-instructors',
  templateUrl: './home-instructors.component.html',
  styleUrls: ['./home-instructors.component.scss']
})
export class HomeInstructorsComponent implements OnInit {

  instructors = [{
    name: 'Anjeun',
    image: 'https://randomuser.me/api/portraits/men/47.jpg',
    testimoni: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati minus in facilis architecto laborum magnam impedit vel esse blanditiis quae perferendis necessitatibus, placeat ut eaque? Possimus amet quisquam asperiores beatae!'
  },
  {
    name: 'Saha',
    image: 'https://randomuser.me/api/portraits/women/30.jpg',
    testimoni: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati minus in facilis architecto laborum magnam impedit vel esse blanditiis quae perferendis necessitatibus, placeat ut eaque? Possimus amet quisquam asperiores beatae!'
  },
  {
    name: 'Dewek',
    image: 'https://randomuser.me/api/portraits/men/24.jpg',
    testimoni: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati minus in facilis architecto laborum magnam impedit vel esse blanditiis quae perferendis necessitatibus, placeat ut eaque? Possimus amet quisquam asperiores beatae!'
  },
  {
    name: 'Aing',
    image: 'https://randomuser.me/api/portraits/women/21.jpg',
    testimoni: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati minus in facilis architecto laborum magnam impedit vel esse blanditiis quae perferendis necessitatibus, placeat ut eaque? Possimus amet quisquam asperiores beatae!'
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
