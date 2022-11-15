import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NextstepTerminalComponent } from './terminal/nextstep-terminal.component';
import { NextstepLinkComponent } from './link/nextstep-link.component';

const components = [
  NextstepTerminalComponent,
  NextstepLinkComponent
]

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule
  ],
  exports:[...components]
})
export class NextStepModule { }
