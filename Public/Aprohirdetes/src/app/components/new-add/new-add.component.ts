import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Advertisement } from '../../../interfaces/advertisement';
import { ApiService } from '../../services/api.service';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-new-add',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatIconModule, MatSelectModule],
  templateUrl: './new-add.component.html',
  styleUrl: './new-add.component.scss'
})
export class NewAddComponent implements OnInit {

  constructor(private api: ApiService, private authService: AuthService) { }
  userId: any;

  advertisement: Advertisement = {
    id: '',
    userID: '',
    date: new Date(),
    title: '',
    description: '',
    price: 0,
    category: '',
    image: '',
  };
  categories = [
    {value: 'ingatlan', viewValue: 'ingatlan'},
    {value: 'gépjármű', viewValue: 'gépjármű'},
    {value: 'háztartási gép', viewValue: 'háztartási gép'},
    {value: 'játék', viewValue: 'játék'},
    {value: 'ruházat', viewValue: 'ruházat'},
  ];

  ngOnInit(): void {
    this.userId = this.authService.getUserId();
    this.advertisement.userID = this.userId;
    console.log(this.userId);
    console.log(this.advertisement);
  }
  
  addNewAdd(){
    this.api.createAdvertisement(this.advertisement).subscribe((res: any) => {
      if (res) {
        console.log("Sikeres hirdetésfeladás!");
        this.resetForm();
      } 
      else{
        console.log("Sikertelen hirdetésfeladás!");
      }
    });

  }

  resetForm() {
    this.advertisement = {
      id: '',
      userID:  '',
      date: new Date(),
      title: '',
      description: '',
      price: 0,
      category: '',
      image: '',
    };
  }


}
