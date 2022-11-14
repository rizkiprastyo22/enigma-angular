import { Observable } from "rxjs";
import Todo from "../model/todo";

export default interface TodoService{
    addTodo(todo: Todo): Observable<Todo>;
    listTodo(): Observable<Todo[]>;
}