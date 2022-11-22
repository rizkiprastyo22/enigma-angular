import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { TodoListComponent } from './list/todo-list.component';
import { TodoFormComponent } from './form/todo-form.component';

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
    CommonModule
    // TodoRoutingModule
  ],
  exports:[TodoComponent]
})
export class TodoModule { }
