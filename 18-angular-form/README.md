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