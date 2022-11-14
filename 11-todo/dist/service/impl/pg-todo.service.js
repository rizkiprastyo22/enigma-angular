"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
class PgTodoService {
    constructor() {
        this.todos = [];
        this.todoNotifier = new rxjs_1.Subject();
    }
    addTodo(todo) {
        return new rxjs_1.Observable((observer) => {
            setTimeout(() => {
                todo.id = this.todos.length + 1;
                this.todos.push(todo);
                this.todoNotifier.next(true);
                observer.next(todo);
            }, 1000);
        });
    }
    listTodo() {
        return (0, rxjs_1.of)(this.todos);
    }
    notify() {
        return this.todoNotifier.asObservable();
    }
}
exports.default = PgTodoService;
