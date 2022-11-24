import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HighlightDirective } from './directives/highlight.directive';
import { BsButtonDirective } from './directives/bs-button.directive';

const components = [
  HeaderComponent,
  FooterComponent
]

const directives = [
  HighlightDirective,
  BsButtonDirective
]

@NgModule({
  declarations: [...components, ...directives],
  imports: [
    CommonModule
  ],
  exports: [...components, ...directives]
})
export class SharedModule { }
