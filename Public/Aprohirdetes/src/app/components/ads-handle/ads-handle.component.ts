import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-ads-handle',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ads-handle.component.html',
  styleUrl: './ads-handle.component.scss'
})
export class AdsHandleComponent {
  constructor(private api: ApiService){}

  

}
