import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { User } from '../../../interfaces/user';
import { ApiService } from '../../services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatFormFieldModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  user: User = {
    id: '',
    name: '',
    email: '',
    password: '',
    confirm: ''
  };

  constructor(private api: ApiService, private _snackBar: MatSnackBar) { }

  registration() {
    this.api.registration('users', this.user).subscribe((res: any) => {
      if (res) {
        // Success message using Toast
        this._snackBar.open("Sikeres regisztráció!", "Siker");
        this.resetForm();
      } 
      else{
        this._snackBar.open("Sikertelen regisztráció!", "Hiba");
      }
    });
  }

  resetForm() {
    this.user = {
      id: '',
      name: '',
      email: '',
      password: '',
      confirm: ''
    };
  }

}
