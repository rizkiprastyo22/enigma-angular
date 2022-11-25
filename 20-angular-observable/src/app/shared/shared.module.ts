import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HighlightDirective } from './directives/highlight.directive';
import { BsButtonDirective } from './directives/bs-button.directive';
import { DatePipe } from './directives/date.pipe';
import { ValidationMessageComponent } from './validation-message/validation-message.component';
import { StringUtil } from './utils/string.util';

const components = [
  HeaderComponent,
  FooterComponent, 
  ValidationMessageComponent
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
  exports: [...components, ...directives, DatePipe],
  providers: [StringUtil]
})
export class SharedModule { }
