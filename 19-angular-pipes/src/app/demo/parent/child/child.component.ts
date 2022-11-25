import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Input() title: string = '';

  // two way binding
  @Input() counter: number = 0;
  @Output() counterChange = new EventEmitter<number>();

  // contoh two-way binding
  @Input() name: string = '';
  @Output() nameChange = new EventEmitter<string>();

  @Output() changeMessage = new EventEmitter<string>();

  messageInput: string = '';
  count: number = 0;

  constructor() {}

  onMessageChange(input: any): void {
    console.log(input); // isinya object event
    console.log(input.target.value); // kalo mau ambil data valuenya
    // kita bisa destructive ambil key dalam object menjadi variabel
    const { value } = input.target;
    // if(value.toLowerCase() === 'mandiri'){
    //   this.messageInput = 'aku '+ value.toLowerCase() + 'an';
    // }
    // else{
    //   this.messageInput = 'saya tetap mandirian';
    // }

    // biar keren
    value.toLowerCase() == 'mandiri'
      ? (this.messageInput = 'aku mandirian')
      : (this.messageInput = 'aku tetap mandirian');

    this.changeMessage.emit(this.messageInput);
  }

  onNameChange(input: any): void {
    // this.name = input;
    this.nameChange.emit(input.target.value);
  }

  countIncrease() {
    this.count++;
    this.counterChange.emit(this.count);
  }

  countDecrease() {
    if (this.count > 0) {
      this.count--;
    }
    this.counterChange.emit(this.count);
  }

  ngOnInit(): void {}
}
