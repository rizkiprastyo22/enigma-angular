import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HighlightDirective } from './directives/highlight.directive';
import { BsButtonDirective } from './directives/bs-button.directive';
import { DatePipe } from './directives/date.pipe';

const components = [
  HeaderComponent,
  FooterComponent
]

const directives = [
  HighlightDirective,
  BsButtonDirective
]

@NgModule({
  declarations: [...components, ...directives, DatePipe],
  imports: [
    CommonModule
  ],
  exports: [...components, ...directives, DatePipe]
})
export class SharedModule { }
