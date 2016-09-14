import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <p><input type="text" [(ngModel)]="name"></p>
    `,
})

export class ContactComponent {
  public name: string = 'Original Name';
}