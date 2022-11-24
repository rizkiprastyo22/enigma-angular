# angular form

## 1. lempar data dari parent (todo.component) ke child (todo-list.component)
- bikin datanya dulu di todo.component.ts
```
  todosParent: Todo[] = [];

  ngOnInit(): void {
    this.getTodos()
  }

  // data yang dilempar
  // disimpan di dalam fungsi karena biar bisa disimpan di session storage
  getTodos(): void{
    this.todosParent = [
      {
        id: 1,
        name: 'Learn Angular',
        isCompleted: false
      },
      {
        id: 2,
        name: 'Makan',
        isCompleted: true
      }
    ]
  }

```

- lalu lempar di todo.component.html
```
<app-todo-list [todosChild]="todosParent"></app-todo-list>
```

## 2. ambil datanya di todo-list.component
- di todo-list.component.ts buat variabel penampung lemparan data
```
@Input() todosChild: Todo[] = []
```

- di todo-list.component.html tampilkan datanya
```
<ul class="list-group">
  <li class="list-group-item" *ngFor="let todo of todos">{{ todo.name }}</li>
</ul>
```

## 3. lempar data dari form ke list (saat ini harus lewat parent)
- di todo-form.components.ts
```
@Output() saveTodo: EventEmitter<Todo> = new EventEmitter<Todo>();
todoForm: FormGroup = new FormGroup({
    // id: new FormControl(null),
    // harus dibungkus array kalo di satu argumen yang sama
    name: new FormControl(),
    isCompleted: new FormControl(false)
  })

  onSubmit(): void {
    // mau cek data dulu
    console.log(this.todoForm.value);
    this.saveTodo.emit(this.todoForm.value)
    // buat kalo udah add langsung hapus
    this.todoForm.reset();
  }
```
- di todo-form.component.html
```
<div class="shadow-sm p-3 mb-5 bg-body rounded">
  <div class="card-body">
    <form [formGroup]="todoForm" (ngSubmit)="onSubmit()">
      <div class="input-group mb-3">
        <div class="input-group-text">
          <input type="checkbox" class="form-check-input m-3">
        </div>
        <input type="text" class="form-control" placeholder="Todo" formControlName="name" />
        <button class="btn btn-outline-primary" type="button">ADD</button>
      </div>
  </form>
  </div>
</div>
```

- di todo-component.ts
```
onSaveTodo(todo: Todo): void {
    todo.id = this.todos.length + 1
    // console.log(todo);
    
    this.todos.push(todo)
  }
```

- di todo-component.html
```
<app-todo-form (saveTodo)="onSaveTodo($event)"></app-todo-form>
```

## 4. validasi data form
- di todo-form.ts tambahkan
```
import { Validators } from '@angular/forms'

name: new FormControl('', [Validators.requiredValidators.minLength(3)]),
```

- di todo-form.html
```
<div class="shadow-sm p-3 mb-5 bg-body rounded">
  <div class="card-body">
    <form [formGroup]="todoForm">
      <div class="input-group mb-3">
        <div class="input-group-text">
          <input type="checkbox" class="form-check-input m-3">
        </div>
        <input type="text" class="form-control" placeholder="Todo" formControlName="name" />
        <button class="btn btn-outline-primary" type="button" (click)="onSubmit()" [disabled]="!todoForm.valid">ADD</button>
      </div>
  </form>
  </div>
</div>
```

kita ganti dulu input hanya bisa pakai button, gabisa enter

## 5. simpan data di session storage
- buka inspect element -> application -> session storage
- di todo-component.ts
```
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
```


## 6. untuk two way binding kita gabisa langsung definisi 