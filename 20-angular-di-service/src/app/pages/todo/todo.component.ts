import { Component, OnInit } from '@angular/core';
import { TODO, Todo } from './model/todo.model';
import th from 'date-fns/locale/th'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {

  today: Date = new Date()
  locale: Locale = th

  constructor() {}

  ngOnInit(): void {
  }

}
