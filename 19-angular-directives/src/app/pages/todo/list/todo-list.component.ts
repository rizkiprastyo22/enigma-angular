import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() todos: Todo[] = []
  @Output() toggleTodo: EventEmitter<Todo> = new EventEmitter<Todo>()
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter<Todo>()
  @Output() editTodo: EventEmitter<Todo> = new EventEmitter<Todo>()


  constructor() { }

  ngOnInit(): void {
    
  }

  onCheckToggle(todo: Todo): void {
    
    // console.log(todo)
    this.toggleTodo.emit(todo)
  }

  onDeleteToggle(todo: Todo): void {
    // console.log(todo);
    
    this.deleteTodo.emit(todo)
  }

  onEditToggle(todo: Todo): void {
    this.editTodo.emit(todo)
  }

}
