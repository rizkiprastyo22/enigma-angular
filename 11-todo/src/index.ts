import { combineLatest, map } from "rxjs";
import Todo from "./model/todo";
import PgTodoService from "./service/impl/pg-todo.service";

let myTodo: PgTodoService = new PgTodoService();

combineLatest([
    myTodo.addTodo({activity: 'bangun', isCompleted: true}),
    myTodo.addTodo({activity: 'makan', isCompleted: false}),
    myTodo.addTodo({activity: 'mandi', isCompleted: true}),
    myTodo.addTodo({activity: 'berangkat', isCompleted: true}),
    myTodo.addTodo({activity: 'bootcamp', isCompleted: false}),
    myTodo.addTodo({activity: 'livecode', isCompleted: true}),
    myTodo.addTodo({activity: 'tidur', isCompleted: false})
]).subscribe((todos: Todo[]) => {
    console.log(`${todos.length} kegiatan sudah ditambahkan`);  
})

// ini proses nampilin get all setelah data ditambahkan
// kalo ga pake notify, get all dianggap hanya melakukan sekali
// myTodo.notify().subscribe((isUpdated) => {
//     if(isUpdated){
//         myTodo.listTodo().subscribe((todos: Todo[]) => {
//             console.log(todos);
//         })
//     }
// })

// jika menggunakan map (operator dalam rxjs)
myTodo.notify().subscribe((isUpdated) => {
    if(isUpdated){
        myTodo.listTodo().pipe(
            map((list: Todo[]) => { // map pertama milik rxjs
                return list.map((todo: Todo) => { // map yang kedua milik javascript
                    return `todo ${todo.activity} ${(todo.isCompleted ? 'sudah selesai' : 'belum selesai')}`
                })
            })
        ).subscribe((todos) => {
            console.log(todos);           
        })
    }
})