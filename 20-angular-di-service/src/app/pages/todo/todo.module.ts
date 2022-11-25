import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { TodoListComponent } from './list/todo-list.component';
import { TodoFormComponent } from './form/todo-form.component';
import { TodoRoutingModule } from './todo-routing.modul';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { TodoService } from './service/todo.service';

const components = [
  TodoListComponent,
  TodoFormComponent
]

@NgModule({
  declarations: [
    TodoComponent,
    ...components
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [TodoService],
  exports:[TodoComponent]
})
export class TodoModule { }
