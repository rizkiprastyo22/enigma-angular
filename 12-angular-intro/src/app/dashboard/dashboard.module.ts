import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HighlightComponent } from './highlight/highlight.component';
import { ResourceComponent } from './resource/resource.component';
import { FooterComponent } from './footer/footer.component';
import { NextStepModule } from './next-step/next-step.module';

const components = [
  ToolbarComponent,
  HighlightComponent,
  ResourceComponent,
  FooterComponent
]

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    NextStepModule
  ],
  exports: [
    ...components,
    NextStepModule
  ]
})
export class DashboardModule { }
