import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-callback',
  template: `
    <p>
      callback works!
    </p>
  `,
  styles: [
  ]
})
export class CallbackComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
    this.auth.handleAuthCallback();
  }

}
