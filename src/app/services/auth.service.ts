import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, shareReplay, tap } from 'rxjs';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private url = 'https://bd-api.nicocartalla.com/api/v1/';

  private httpOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  login(email: string, password: string) {
    return this.http.post<any>(this.url+'authenticate', { email, password }, {observe: 'response'}).pipe(
      tap((res) => this.setSession(res)),  
      shareReplay(),
      // catchError(this.handleError)
    );    
    
  }

  signUp(user: any, question: any) {
    return this.http.post<any>(this.url+'signup', { user, question}, {observe: 'response'});
  }
  

  recoverPassword(email: string, pregunta_id: number, respuesta: string) {
    return this.http.post<any>(this.url+'authenticate/recoverpwd', { email, pregunta_id, respuesta }, {observe: 'response'});
  }

  private setSession(authResult: any) {  
    console.log(authResult);
    
    const expiresAt = new Date(authResult.body.expiration * 1000);

    
    localStorage.setItem('token', authResult.body.token);
    localStorage.setItem('expiration', JSON.stringify(expiresAt.valueOf()));

    if (authResult.body.roles == null) {
      localStorage.setItem('role', JSON.stringify(''));
      return
    } 

    localStorage.setItem('role', JSON.stringify(authResult.body.roles[0].description));
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem('expiration') as string;
    const expiresAt = JSON.parse(expiration);

    return moment(expiresAt);
  }

  getRoles() {      
    const role = localStorage.getItem('role') as string;
    const roles = JSON.parse(role);

    return roles;
  }

  isAdmin() {
    return this.getRoles() === 'Administrador';
  }

}
