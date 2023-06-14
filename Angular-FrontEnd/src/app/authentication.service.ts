import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatorService {

constructor(private http: HttpClient) { }
  User( email: string,password: string ) {
    const signInData = { email,password };
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      responseType: 'text' as 'json'  // Treat the response as plain text
    };

    return this.http.post<string>(`https://localhost:7271/api/Login/User`, signInData, httpOptions)
      .pipe(
        tap(jwtToken => {
          localStorage.setItem('jwtToken', jwtToken);
        })
      );
  }
  Admin( adminName: string,adminPassword: string ) {
    const signInData = { adminName,adminPassword };
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      responseType: 'text' as 'json'  // Treat the response as plain text
    };

    return this.http.post<string>(`https://localhost:7271/api/Login/Admin`, signInData, httpOptions)
      .pipe(
        tap(jwtToken => {
          localStorage.setItem('jwtToken', jwtToken);
        })
      );
  }
  getToken()
  {
    return localStorage.getItem('jwtToken');
  }
  clearToken() {
    return localStorage.removeItem('jwtToken');
  }
  
}