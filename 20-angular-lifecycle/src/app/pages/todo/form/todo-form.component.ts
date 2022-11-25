import { Component, OnInit, OnChanges, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms'
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit, OnChanges {

  @Input() todo!: Todo

  @Output() todoChange: EventEmitter<Todo> = new EventEmitter<Todo>();

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
    this.todoChange.emit(this.todoForm.value)
    // buat kalo udah add langsung hapus
    this.todoForm.reset();
  }

  setFormValue(todo: Todo){
    if(todo){
      this.todoForm.controls['id']?.setValue(todo.id)
      this.todoForm.controls['name']?.setValue(todo.name)
      this.todoForm.controls['isCompleted']?.setValue(todo.name)
    }
  }

  // getter
  // tambahkan ! agar memaksa input menjadi undefined
  get name() { return this.todoForm.get('name')! }

  // cara 1 biar bisa valid dan invalid
  // isFormValid(todoField: string): string {
  //   const control: AbstractControl = this.todoForm.get(todoField) as AbstractControl
  //   let className = ''
  //   // jika input tidak valid
  //   if(control && control.invalid && (control.dirty || control.touched)){
  //     className = 'is-invalid'
  //   }
  //   // jika input valid
  //   else if(control && control.valid && (control.dirty || control.touched)){
  //     className = 'is-valid'
  //   }
  //   return className
  // }

  // cara 2 biar kode lebih singkat tapi cuma bisa invalid
  isFormValid(todoField: string): boolean {
    const control: AbstractControl = this.todoForm.get(todoField) as AbstractControl
    return(control && control.invalid && (control.dirty || control.touched))
  }

}
