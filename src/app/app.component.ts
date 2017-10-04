import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private showMenu = false;
  isItAndroid = false;

  constructor() {}

  ngOnInit() {
    this.getDeviceInfo();
  }

  doShowMenu(): void {
    document.body.classList.add('sidebar-collapse');
    document.body.classList.add('sidebar-mini');
    document.body.classList.add('fixed');
    document.body.classList.remove('sidebar-open');
  }

  doHideMenu(): void {
    document.body.classList.remove('sidebar-collapse');
    document.body.classList.add('sidebar-open');
  }

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
    if (this.showMenu) {
      this.doShowMenu();
    } else {
      this.doHideMenu();
    }
  }

  hideIfAndroid(): void {
    if (this.isItAndroid) {
      this.toggleMenu();
    }
  }

  getDeviceInfo(): void {
    const isAndroid = navigator.userAgent.match(/Android/i);
    if (isAndroid) {
      this.isItAndroid = true;
    }
  }
}
