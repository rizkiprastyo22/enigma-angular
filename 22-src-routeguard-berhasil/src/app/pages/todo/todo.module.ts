import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { RouterModule } from '@angular/router';
import { TodoRoutingModule } from './todo-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { TodoService } from './service/todo.service';



@NgModule({
  declarations: [
    TodoComponent,
    TodoFormComponent,
    TodoListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TodoRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule
  ],
  providers:[TodoService],
  exports:[
    TodoComponent
  ]
})
export class TodoModule { }
