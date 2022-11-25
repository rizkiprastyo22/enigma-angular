import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent 
  implements 
  OnInit,
  OnChanges,
  OnDestroy,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked {

  componentName = 'This is Lifecycle';

  constructor() {
    // check dulu mana yang dijalankan duluan
    console.log('constructor: ' + this.componentName);
   }
  ngAfterViewChecked(): void {
    // check dulu mana yang dijalankan duluan
    console.log('ngAfterViewChecked: ' + this.componentName);
  }
  ngAfterViewInit(): void {
    // check dulu mana yang dijalankan duluan
    console.log('ngAfterViewInit: ' + this.componentName);
  }
  ngAfterContentChecked(): void {
    // check dulu mana yang dijalankan duluan
    console.log('ngAfterContentChecked: ' + this.componentName);
  }
  ngAfterContentInit(): void {
    // check dulu mana yang dijalankan duluan
    console.log('ngAfterContentInit: ' + this.componentName);
  }
  ngDoCheck(): void {
    // check dulu mana yang dijalankan duluan
    console.log('ngDoCheck: ' + this.componentName);
  }
  ngOnDestroy(): void {
    // check dulu mana yang dijalankan duluan
    console.log('ngOnDestroy: ' + this.componentName);
  }
  ngOnChanges(changes: SimpleChanges): void {
    // check dulu mana yang dijalankan duluan
    console.log('ngOnChanges: ' + this.componentName);
  }

  ngOnInit(): void {
    // check dulu mana yang dijalankan duluan
    console.log('ngOnInit: ' + this.componentName);
  }

}
