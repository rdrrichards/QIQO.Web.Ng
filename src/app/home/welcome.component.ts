import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
  public pageTitle = 'Welcome to the Cheesecake Fool!';

  constructor() {
    $(document).ready(function () {
      $('#logo').click(function () {
        $('#babyCakes').slideToggle();
      });
    });
  }
}
