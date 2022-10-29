import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-car2',
  templateUrl: './car2.component.html',
  styleUrls: ['./car2.component.css'],
})
export class Car2Component implements OnInit {
  carName: string = 'Golf';
  carVersion: number = 8;
  carColor: string = 'red';
  isNew: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
