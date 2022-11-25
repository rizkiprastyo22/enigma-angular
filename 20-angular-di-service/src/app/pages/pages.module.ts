import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { HomeModule } from './home/home.module';
import { CoursesModule } from './courses/courses.module';
import { PagesRoutingModule } from './pages-routing.module';
import { TodoModule } from './todo/todo.module';

@NgModule({
  declarations: [
    PagesComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HomeModule,
    CoursesModule,
    TodoModule
  ],
  exports: [PagesComponent]
})
export class PagesModule { }
