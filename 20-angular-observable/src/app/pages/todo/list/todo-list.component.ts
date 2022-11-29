import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../model/todo.model';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = []

  constructor(private todosService: TodoService) {   }

  ngOnInit(): void {
    this.onLoadTodo()
  }

  onLoadTodo(): void{
    this.todosService.getAll().subscribe({
      next: (todos: Todo[]) => {
        this.todos = todos
      }
    })
  }

  checked(todo: Todo){
    this.todosService.checked(todo).subscribe()
  }

  delete(todo: Todo){
    this.todosService.delete(todo).subscribe()
  }

}
