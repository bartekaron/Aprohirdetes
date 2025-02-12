import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatButtonModule, MatMenuModule, FormsModule, CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit{
  isLoggedIn: boolean = false;
  constructor(private router: Router, private authService: AuthService) { }
  navItems: any [] = [];
  
  ngOnInit(): void {
    if(this.isLoggedIn == true){
      this.isLoggedIn = true;
      this.navItems = [
        { label: 'Hirdetések', url: '/ads' },
        { label: 'Hirdetések kezelése', url: '/adsHandle' },
        { label: 'Kijelentkezés', url: '/logout' }
      ]
    }
    else{
      this.navItems = [
        { label: 'Bejelentkezés', url: '/login' },
        { label: 'Regisztráció', url: '/register' }
      ]
    }
    
  }

}
