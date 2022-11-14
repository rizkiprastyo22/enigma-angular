"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const pg_todo_service_1 = require("./service/impl/pg-todo.service");
let myTodo = new pg_todo_service_1.default();
(0, rxjs_1.combineLatest)([
    myTodo.addTodo({ activity: 'bangun', isCompleted: true }),
    myTodo.addTodo({ activity: 'makan', isCompleted: false }),
    myTodo.addTodo({ activity: 'mandi', isCompleted: true }),
    myTodo.addTodo({ activity: 'berangkat', isCompleted: true }),
    myTodo.addTodo({ activity: 'bootcamp', isCompleted: false }),
    myTodo.addTodo({ activity: 'livecode', isCompleted: true }),
    myTodo.addTodo({ activity: 'tidur', isCompleted: false })
]).subscribe((todos) => {
    console.log(`${todos.length} kegiatan sudah ditambahkan`);
});
myTodo.notify().subscribe((isUpdated) => {
    if (isUpdated) {
        myTodo.listTodo().pipe((0, rxjs_1.map)((list) => {
            return list.map((todo) => {
                return `todo ${todo.activity} ${(todo.isCompleted ? 'sudah selesai' : 'belum selesai')}`;
            });
        })).subscribe((todos) => {
            console.log(todos);
        });
    }
});
