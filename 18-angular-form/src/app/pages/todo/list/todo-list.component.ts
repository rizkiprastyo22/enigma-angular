import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() todos: Todo[] = []
  @Output() editTodo = new EventEmitter()
  @Output() toggleTodo = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

}
