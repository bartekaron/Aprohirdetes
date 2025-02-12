import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['/login']);
  }

  logout() {
    localStorage.removeItem('aprohirdetes');
    localStorage.removeItem('user');
    localStorage.removeItem('loggedUserId');
    this.router.navigate(['/login']);

  }

}
