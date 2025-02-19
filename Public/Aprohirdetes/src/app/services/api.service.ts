import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments'; // Fix the import path
import { Observable, throwError } from 'rxjs';
import { Advertisement } from '../../interfaces/advertisement';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private server = environment.serverUrl;
  public tokenName = environment.tokenName;

  constructor(private http: HttpClient) { }

  getTokenName(): string{
    return this.tokenName;
  }

  getToken():String | null{
    return localStorage.getItem(this.tokenName);
  }

  tokenHeader():{ headers: HttpHeaders }{
    const token = this.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    }); 
    return { headers }
  }
  
  
  registration(table: string, data: object) {
    return this.http.post(this.server + '/api/' + table + '/register', data);
  }
  
  login(table: string, data: object) {
    return this.http.post(this.server + '/api/' + table + '/login/', data);
  }

  getAllAdvertisements() {
    return this.http.get(this.server + '/api/advertisement/');
  }

  createAdvertisement(data: object) {
    return this.http.post(this.server + '/api/advertisement/', data, this.tokenHeader());
  }

  getAdvertisementByUserId(userId: string): Observable<Advertisement[]> {
    return this.http.get<Advertisement[]>(`/api/advertisements?userId=${userId}`);
  }
  
  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error);
    return throwError('Something went wrong; please try again later.');
  }


}
