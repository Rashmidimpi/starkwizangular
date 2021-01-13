import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// User interface
export class User {
  
  email: String;
  password: String;

}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  

  // Login
  signin(user: User): Observable<any> {
    return this.http.post<any>('https://rentopool.com/starkwiz/api/auth/login', user);
  }

}
