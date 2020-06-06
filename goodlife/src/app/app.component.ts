import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'goodlife';
  actualPage= 0;

  pageSwitch(page) {
    this.actualPage = page;
  }
}
