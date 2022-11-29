import { Component, OnInit, OnChanges, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms'
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Todo } from '../model/todo.model';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit, OnChanges {

  todo!: Todo

  constructor(
    private todoService: TodoService, 
    private readonly route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params: Params) => {
        const { id } = params
        this.todoService.getId(+id).subscribe({
          next: (todo: Todo) => {
            this.todo = todo
            this.setFormValue(this.todo) 
          }
        })
        
      }
    })
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
    // buat kalo udah add langsung hapus
    this.todoService.save(this.todoForm.value).subscribe()
    this.todoForm.reset();
    this.router.navigateByUrl('todo')
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
