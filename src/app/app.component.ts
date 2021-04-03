import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bau-ispad';
  dragToggleDistance = 5;
  sidebarData = [
    {
      icon: 'fas fa-home',
      redirectUrl: 'home'
    },
    {
      icon: 'far fa-file-alt',
      redirectUrl: 'clinical-care'
    },
    {
      icon: 'fas fa-link',
      redirectUrl: '#'
    },
    {
      icon: 'fas fa-graduation-cap',
      redirectUrl: '#'
    },
    {
      icon: 'fas fa-expand',
      redirectUrl: '#'
    }
  ]

  onOpenChange() {
    this.state.open = !this.state.open;
  }

  onListItemClick(data: { icon: string, redirectUrl: string }) {
    this.router.navigateByUrl(data.redirectUrl);
    this.state.open = false;
  }

  constructor(
    private router: Router
  ) {

  }

  height: number = document.documentElement.clientHeight;
  nums: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  state = {
    open: false
  };

  isAuthenticated() {
    return localStorage.getItem('isAuthenticated') === 'true';
  }
}
