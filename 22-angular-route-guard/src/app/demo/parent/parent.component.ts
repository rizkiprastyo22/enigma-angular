import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  title: string = 'title dari parent.component'
  counter: number = 0
  name: string = ''

  changeMessage: string = ''

  constructor() { }

  
  onChangeCounter(count: number): void {
    this.counter = count
  }

  onChangeMessage(message: string): void {
    this.changeMessage = message
  }

  onChangeName(input: string){
    this.name = input
  }
  
  ngOnInit(): void {
  }


}
