import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ApiService } from '../../services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, FormsModule, CommonModule, MatInputModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  user: any ={
    id: '',
    email: '',
    password: ''
  }

  constructor(private api: ApiService, private _snackBar: MatSnackBar, private authService: AuthService, private router: Router) { }

  login() {
    this.api.login('users', this.user).subscribe(
      (res: any) => {
        if (res && res.token) {
          this.authService.login(res.token, res.user); // Bejelentkezés az AuthService-ben
          this._snackBar.open("Sikeres bejelentkezés!", "Ok");
          this.router.navigate(['/ads']); 
        } else {
          this._snackBar.open("Sikertelen bejelentkezés!", "Ok");
        }
      },
      (error) => {
        console.error('Hiba történt:', error);
        this._snackBar.open("Hiba történt!", "Ok");
      }
    );
  }
  
}
