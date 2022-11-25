import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-courses',
  templateUrl: './home-courses.component.html',
  styleUrls: ['./home-courses.component.scss']
})
export class HomeCoursesComponent implements OnInit {

  courses = [{
    name: 'JavaScript is Fum',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut eius voluptas soluta quia quo, nam, laboriosam, quam cum omnis unde esse corporis perspiciatis illo maiores voluptates ipsa quae illum odit?',
    level: 'intermediate',
    image: ''
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
