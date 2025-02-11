import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments'; // Fix the import path

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
  
  

}
