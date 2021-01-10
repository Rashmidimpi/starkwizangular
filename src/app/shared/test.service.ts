import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  getTestList(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/getuser');
  }

}
