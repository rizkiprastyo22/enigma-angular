import { Component, OnInit } from '@angular/core';
import { Todo } from './model/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  // buat lempar data ke child
  todos: Todo[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getTodos()
  }

  // data yang dilempar
  // disimpan di dalam fungsi karena biar bisa disimpan di session storage
  getTodos(): void{
    this.todos = [
      {
        id: 1,
        name: 'Learn Angular',
        isCompleted: false
      },
      {
        id: 2,
        name: 'Makan',
        isCompleted: true
      }
    ]
  }

}
