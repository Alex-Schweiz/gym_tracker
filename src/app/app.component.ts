import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private menuToggle = false;

  constructor() {}

  toggleMenu() {
    this.menuToggle = !this.menuToggle;
    if (this.menuToggle) {
      document.body.classList.add('sidebar-collapse');
      document.body.classList.add('sidebar-mini');
      document.body.classList.add('fixed');
      document.body.classList.remove('sidebar-open');
    } else {
      document.body.classList.remove('sidebar-collapse');
      document.body.classList.add('sidebar-open');
    }
  }
}
