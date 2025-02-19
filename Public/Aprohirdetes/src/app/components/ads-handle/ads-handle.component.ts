import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
import { Advertisement } from '../../../interfaces/advertisement';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-ads-handle',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './ads-handle.component.html',
  styleUrls: ['./ads-handle.component.scss']
})
export class AdsHandleComponent implements OnInit {
  displayedColumns: string[] = ['title', 'category', 'description', 'price'];
  dataSource: Advertisement[] = [];
  clickedRows = new Set<Advertisement>();

  constructor(private api: ApiService, private authService: AuthService) {}

  ngOnInit(): void {
    const userId = this.authService.getUserId();
    if (userId) {
      this.api.getAdvertisementByUserId(userId).pipe(
        catchError(error => {
          console.error('Error fetching advertisements:', error);
          return of([]);
        })
      ).subscribe((res: Advertisement[]) => {
        this.dataSource = res;
      });
    }
  }
}