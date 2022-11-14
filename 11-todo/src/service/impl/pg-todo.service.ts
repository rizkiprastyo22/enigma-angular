import { Observable, Observer, of, Subject } from "rxjs";
import Todo from "../../model/todo";
import TodoService from "../todo.service";

export default class PgTodoService implements TodoService{

    todos: Todo[] = [];
    todoNotifier: Subject<boolean> = new Subject<boolean>() // ngasih tau kalo ada data yang sedang proses ditambahkan

    addTodo(todo: Todo): Observable<Todo> {
        return new Observable<Todo>((observer: Observer<Todo>) =>{
            setTimeout(() => {
                todo.id = this.todos.length + 1 // auto increment
                this.todos.push(todo) // masukkan data ke array
                this.todoNotifier.next(true) // memberitahu todoNotifier nilainya sudah true
                observer.next(todo)
            }, 1000)
        })
    }

    listTodo(): Observable<Todo[]>{
        return of(this.todos)
    }

    notify(): Observable<boolean>{
        return this.todoNotifier.asObservable()
    }

}