import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { Advertisement } from '../../../interfaces/advertisement';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ads',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule],
  templateUrl: './ads.component.html',
  styleUrl: './ads.component.scss'
})
export class AdsComponent implements OnInit{
  constructor(private api: ApiService, private router: Router) { }
  ads: Advertisement[] = []; // Initialize ads as an empty array

  ngOnInit(): void {
    this.api.getAllAdvertisements().subscribe((res: any) => {
      this.ads = res.advertisements;
    });
  }

  newAdd(){
    this.router.navigate(['/newAdd']);
  }
}
