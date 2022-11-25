import { Injectable } from '@angular/core';
import { TODO, Todo } from '../model/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [];
  private storage: Storage = sessionStorage;

  constructor() {}

  getAll(): Todo[] {
    const sessionTodos: string = this.storage.getItem(TODO) as string;
    try {
      // if (!sessionTodos) {
      //   const todos: Todo[] = [];
      //   this.todos = todos;
      // } else {
      //   this.todos = JSON.parse(sessionTodos)
      // }
      // this.setToStorage()
      // return this.todos;

      // pake tanering
      const todos: Todo[] = sessionTodos
        ? JSON.parse(sessionTodos)
        : [
            {
              id: 1,
              name: 'First Todo',
              iscompleted: false,
            },
          ];
      this.todos = todos;
      this.setToStorage();
      return todos;
    } catch (err: any) {
      return err.message;
    }
  }

  save(todo: Todo): void {
    try {
      if (todo.id) {
        this.todos = this.todos.map((tod) => {
          if (tod.id === todo.id) tod = todo;
          return tod;
        });
      } else {
        todo.id = this.todos.length + 1;
        this.todos.push(todo);
      }
      // console.log(this.todos)
      this.setToStorage();
    } catch (e) {
      console.log(e);
    }
  }

  checked(todo: Todo): void {
    try {
      todo.isCompleted = !todo.isCompleted;
      this.save(todo);
    } catch (error) {
      console.log(error);
    }
  }

  delete(todo: Todo): void {
    try {
      for (let i = 0; i < this.todos.length; i++) {
        if (this.todos[i].id === todo.id) {
          this.todos.splice(i, 1);
          this.setToStorage();
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  getId(id: number): Todo {
    try {
      return this.todos.find((t) => t.id == id) as Todo;
    } catch (e: any) {
      return e.message;
    }
  }

  private setToStorage(): void {
    this.storage.setItem(TODO, JSON.stringify(this.todos));
  }
}
