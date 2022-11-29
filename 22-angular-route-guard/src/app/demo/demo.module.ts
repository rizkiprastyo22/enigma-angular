import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { DemoRoutingModule } from './demo-routing.module';
import { ChildAaComponent } from './component-a/child-aa/child-aa.component';
import { ChildAbComponent } from './component-a/child-ab/child-ab.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { EncapsulationComponent } from './encapsulation/encapsulation.component';
import { SharedModule } from '../shared/shared.module';
import { LifecycleComponent } from './lifecycle/lifecycle.component';

@NgModule({
  declarations: [
    ComponentAComponent,
    ComponentBComponent,
    ChildAaComponent,
    ChildAbComponent,
    ParentComponent,
    ChildComponent,
    EncapsulationComponent,
    LifecycleComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DemoRoutingModule,
    SharedModule
  ],
  exports: [
    ComponentAComponent,
    ComponentBComponent,
    ChildAaComponent,
    ChildAbComponent,
    ParentComponent,
    ChildComponent
  ]
})
export class DemoModule { }
