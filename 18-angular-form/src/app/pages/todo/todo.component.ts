import { Component, OnInit } from '@angular/core';
import { TODO, Todo } from './model/todo.model';

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
    const sessionTodos: string = sessionStorage.getItem(TODO) as string;

    // jika datanya gaaada, buat string kosong di session dan kita ambil
    // JSON.stringify() -> dari object ke string
    if(!sessionTodos){
      const todos: Todo[] = []
      sessionStorage.setItem(TODO, JSON.stringify(todos));
      this.todos = todos
    }

    // kalo udah ada, tinggal parse aja data string dari session
    // JSON.parse() -> dari string ke object
    else{
      this.todos = JSON.parse(sessionTodos);
    }
  }

  onSaveTodo(todo: Todo): void {
    todo.id = this.todos.length + 1
    // console.log(todo);
    
    this.todos.push(todo)
    sessionStorage.setItem(TODO, JSON.stringify(this.todos))
  }

}
