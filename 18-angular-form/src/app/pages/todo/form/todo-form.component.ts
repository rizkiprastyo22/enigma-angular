import { Component, OnInit, OnChanges, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit, OnChanges {

  @Input() todo!: Todo

  @Output() saveTodo: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void{
    this.setFormValue(this.todo)
  }

  todoForm: FormGroup = new FormGroup({
    id: new FormControl(),
    // harus dibungkus array kalo di satu argumen yang sama
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    isCompleted: new FormControl(false)
  })

  onSubmit(): void {
    // mau cek data dulu
    // console.log(this.todoForm.value);
    this.saveTodo.emit(this.todoForm.value)
    // buat kalo udah add langsung hapus
    this.todoForm.reset();
  }

  setFormValue(todo: Todo){
    if(todo){
      this.todoForm.controls['id']?.setValue(todo.id);
      this.todoForm.controls['name']?.setValue(todo.name);
      this.todoForm.controls['isCompleted']?.setValue(todo.name);
    }
  }

}
