import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { DemoRoutingModule } from './demo-routing.module';

@NgModule({
  declarations: [
    ComponentAComponent,
    ComponentBComponent
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
