import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { TODO, Todo } from '../model/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [];
  private storage: Storage = sessionStorage;

  constructor() {}

  getAll(): Observable<Todo[]>{
    return new Observable<Todo[]>((observer: Observer<Todo[]>) => {
      const sessionTodos: string = this.storage.getItem(TODO) as string;
      try {
        if(!sessionTodos){
          const todos: Todo[] = []
          this.todos = todos
          observer.next(this.todos)
        } 
        else {
          this.todos = JSON.parse(sessionTodos)
          observer.next(this.todos)
        }
        this.setToStorage()
      } catch (e: any) {
        observer.error(e.message)
      }
    })
  }

  save(todo: Todo): Observable<void>{
    return new Observable<void>((observer: Observer<void>) => { 
      try {
        if (todo.id) {
          this.todos = this.todos.map((tod) => {
            if (tod.id === todo.id) tod = todo;
            return tod;
          });
        } else {
          todo.id = this.todos.length + 1;
          this.todos.push(todo);
          observer.next();
        }
        // console.log(this.todos)
        this.setToStorage();
      } catch (e: any) {
        observer.error(e.message);
      }
    })
  }

  checked(todo: Todo): Observable<void> {
    return new Observable<void>((observer: Observer<void>) => {
      try {
        todo.isCompleted = !todo.isCompleted;
        this.save(todo);
        observer.next();
      } catch (error: any) {
        observer.error(error.message)
      }
    })
  }

  delete(todo: Todo): Observable<void> {
    return new Observable<void>((observer: Observer<void>) => {
      try {
        for (let i = 0; i < this.todos.length; i++) {
          if (this.todos[i].id === todo.id) {
            this.todos.splice(i, 1);
            this.setToStorage();
            observer.next()
          }
        }
      } catch (error: any) {
        observer.error(error.message)
      }
    })
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
