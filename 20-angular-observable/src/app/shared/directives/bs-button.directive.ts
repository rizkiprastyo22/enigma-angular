import { Directive, HostBinding, Input } from '@angular/core';

enum ButtonColor{
  PRIMARY = 'primary',
  WARNING = 'warning',
  DANGER = 'danger'
}

enum ButtonSize{
  SMALL ='sm',
  MEDIUM ='md',
  LARGE ='lg'
}

@Directive({
  selector: '[appBsButton]'
})
export class BsButtonDirective {

  @Input() color: 'PRIMARY'| 'WARNING' | 'DANGER' = 'DANGER';
  @Input() size: 'LARGE'| 'MEDIUM' | 'SMALL' = 'MEDIUM';

  constructor() { }

  @HostBinding('class')
  get btnStyle(): string {
    const btnColor: ButtonColor = ButtonColor[this.color]
    const btnSize: ButtonSize = ButtonSize[this.size]    // contoh: btn btn-primary btn-md
    return `btn btn-${btnColor} btn-${btnSize}`;

  }

}
