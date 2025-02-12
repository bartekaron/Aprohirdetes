import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Advertisement } from '../../../interfaces/advertisement';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-new-add',
  standalone: true,
  imports: [FormsModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatIconModule],
  templateUrl: './new-add.component.html',
  styleUrl: './new-add.component.scss'
})
export class NewAddComponent implements OnInit {

  constructor(private api: ApiService) { }

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

  ngOnInit(): void {
    
  }

  addNewAdd(){

  }


}
