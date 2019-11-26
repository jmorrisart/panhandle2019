import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-new-angular-app';
  viewMobileMenu: boolean;
  public showmenu = false;
  constructor() {
    this.viewMobileMenu = false;
  }
  showHideMobileMenu() {
    this.viewMobileMenu = !this.viewMobileMenu;
  }

  hideMobileMenu(): void {
    window.location.reload();
  }

  toggleMenu() {
    this.showmenu = false;
  }

  // hideMenu(): void {
  //
  // }
}
