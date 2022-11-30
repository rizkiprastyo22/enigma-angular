import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiResponse } from 'src/app/shared/model/api-response.model';
import Swal from 'sweetalert2';
import { TODO, Todo } from '../model/todo.model';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos!: Todo[];
  isLoading: boolean = true;
  storage: Storage = sessionStorage
  constructor(
    private readonly todoService: TodoService
  ) {}

  ngOnInit(): void {
    this.onLoadTodo()
  }

  onCheckTodo(todo: Todo): void {
    // todo.isCompleted=!todo.isCompleted
    this.todoService.toggle(todo).subscribe()
  }

  onLoadTodo() {
    this.isLoading = false;
    this.todoService.getAll().subscribe({
      next: (response: ApiResponse<Todo[]>) => {
        this.onSuccessLoadTodo(response);
      },
      error: (errorResponse: HttpErrorResponse) => {
        this.onErrorLoadTodo(errorResponse);
      },
    })
  }

  private onSuccessLoadTodo(response: ApiResponse<Todo[]>) {  
    this.todos = response.data
  }

  private onErrorLoadTodo(error: HttpErrorResponse) {
    if (error.status === 401) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Data tidak ada',
      });
    }
  }

  onDeleteTodo(todo: Todo): void {
    if (todo.isCompleted) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Todo sudah selesai tidak bisa dihapus!'
      })
    } else {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          );
          this.todoService.remove(todo).subscribe(() => {
            this.onLoadTodo();
          });
        }
      });
    }
  }

  // onEditTodo(todo: Todo): void {
  //   this.todoService()
  // }

}
