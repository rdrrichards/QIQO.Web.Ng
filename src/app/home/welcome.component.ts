import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
  public pageTitle = 'Welcome to the Cheesecake Fool!';
  ver = VERSION.full;

  constructor() {
  }
}
