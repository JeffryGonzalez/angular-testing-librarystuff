import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-auth-lib',
  template: `
    <h1 data-testid="msg">
      {{msg}}
    </h1>
    <button (click)="party()">Click Me For A Good Time</button>
  `,
  styles: [
  ]
})
export class AuthLibComponent implements OnInit {

  @Input() msg = 'auth-lib is go!';
  constructor() { }

  ngOnInit(): void {
  }

  party() {
    this.msg = 'PARTY TIME!';
  }

}
