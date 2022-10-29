import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car3',
  templateUrl: './car3.component.html',
  styles: ['.first{background-color: green}', '.second{color: blue}'],
})
export class Car3Component implements OnInit {
  doorStatus: string = 'Open';
  isOpen: boolean = true;
  items: any = [];

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.isOpen = !this.isOpen;
    this.items.push(this.isOpen);
  }
}
