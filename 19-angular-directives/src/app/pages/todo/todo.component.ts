import { Component, OnInit } from '@angular/core';
import { TODO, Todo } from './model/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  // buat lempar data ke child
  todos!: Todo[];
  private _todo!: Todo

  isLoading: boolean = true

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.getTodos();
    }, 2000)
  }

  // data yang dilempar
  // disimpan di dalam fungsi karena biar bisa disimpan di session storage
  getTodos(): void {
    this.isLoading = false
    const sessionTodos: string = sessionStorage.getItem(TODO) as string;

    // jika datanya gaaada, buat string kosong di session dan kita ambil
    // JSON.stringify() -> dari object ke string
    if (!sessionTodos) {
      const todos: Todo[] = [
        {
          id: 1,
          name: 'Makan',
          isCompleted: false,
        },
        {
          id: 2,
          name: 'Ngoding',
          isCompleted: true,
        },
      ];
      sessionStorage.setItem(TODO, JSON.stringify(todos));
      this.todos = todos;
    }

    // kalo udah ada, tinggal parse aja data string dari session
    // JSON.parse() -> dari string ke object
    else {
      this.todos = JSON.parse(sessionTodos);
    }
  }

  get todo(): Todo { return this._todo as Todo }
  set todo(todo: Todo) {
    this.onSaveTodo(todo)
  }

  onSaveTodo(todo: Todo): void {
    // console.log(todo);
    if(todo.id){
      this.todos = this.todos.map((tod)=>{
        if(tod.id === todo.id) tod = todo
        return tod
      })
    }
    else{
      todo.id = this.todos.length + 1;
      this.todos.push(todo);
    }
    sessionStorage.setItem(TODO, JSON.stringify(this.todos));
  }

  onToggleTodo(todo: Todo): void {
    todo.isCompleted = !todo.isCompleted;
    // this.todos[todo.id - 1] = todo // ga perlu
    // ini langsung update key yang sama
    sessionStorage.setItem(TODO, JSON.stringify(this.todos));
    // console.log(todo)
    // console.log(this.todos)
  }

  onDeleteTodo(todo: Todo): void {
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].id === todo.id) {
        this.todos.splice(i, 1);
        sessionStorage.setItem(TODO, JSON.stringify(this.todos));
      }
    }
  }

  onEditTodo(todo: Todo): void {
    // console.log(todo);
    this._todo = todo;
  }
}
