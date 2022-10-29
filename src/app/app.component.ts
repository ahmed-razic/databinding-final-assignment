import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      .white {
        color: white;
      }
    `,
  ],
})
export class AppComponent {
  secretPassword: string = 'Secret Password = tuna';
  displayOn: boolean = false;
  items: any = [];
  title = 'databinding-final-assignment';

  changeDisplay() {
    this.displayOn = !this.displayOn;
    this.items.push(this.secretPassword);
  }
}
