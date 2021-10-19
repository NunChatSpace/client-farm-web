import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenService {

  constructor(private httpClient: HttpClient) { }

  getAccesstoken(email: string, password: string): Observable<any> {
    return this.httpClient.post('http://backend.aistrom.com:8000/_healthz',{Email: email, Password: password});
  }

  getHealthCheck(): Observable<any> {
    return this.httpClient.get('_healthz');
  }
}
