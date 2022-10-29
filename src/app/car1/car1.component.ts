import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-car1]',
  template: `<hr />
    <p>car1 still works</p>
    <h3>second line of inline template</h3>
    <h4>and another line of inline template</h4>
    <h5 class="first">and last line</h5>
    <hr />`,
  styles: [
    'p{color: red;} h3{color: green;}',
    'h4{color: blue;}',
    '.first{color: orange; font-size: 3rem;}',
  ],
})
export class Car1Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
