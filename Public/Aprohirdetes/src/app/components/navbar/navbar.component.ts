import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, FormsModule, CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
  isLoggedIn$: Observable<boolean>; // Observable to track login state
  navItems: any[] = [];

  constructor(private router: Router, private authService: AuthService) {
    // Subscribe to the login status observable from the AuthService
    this.isLoggedIn$ = this.authService.isLoggedIn$;
  }

  ngOnInit(): void {
    // Update navItems based on login status when the component initializes
    this.updateNavItems();
    
    // Subscribe to the login status observable
    this.isLoggedIn$.subscribe(isLoggedIn => {
      this.updateNavItems();
    });
  }

  // This method updates navItems based on login status
  updateNavItems() {
    if (this.authService.getToken()) {
      this.navItems = [
        { label: 'Hirdetések', url: '/ads' },
        { label: 'Hirdetések kezelése', url: '/adsHandle' },
        { label: 'Kijelentkezés', url: '/logout', action: () => this.logout() }
      ];
    } else {
      this.navItems = [
        { label: 'Bejelentkezés', url: '/login' },
        { label: 'Regisztráció', url: '/register' }
      ];
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}