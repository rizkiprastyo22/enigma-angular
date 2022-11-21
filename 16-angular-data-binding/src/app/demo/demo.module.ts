import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { DemoRoutingModule } from './demo-routing.module';
import { ChildAaComponent } from './component-a/child-aa/child-aa.component';
import { ChildAbComponent } from './component-a/child-ab/child-ab.component';

@NgModule({
  declarations: [
    ComponentAComponent,
    ComponentBComponent,
    ChildAaComponent,
    ChildAbComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DemoRoutingModule
  ],
  exports: [
    ComponentAComponent,
    ComponentBComponent
  ]
})
export class DemoModule { }
