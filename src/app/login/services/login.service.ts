import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../models/user.model';

const URL = 'http://localhost:3002'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user: User

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${URL}/login`, { email, password }).pipe(
      tap(user => {
        this.user = user
        sessionStorage.setItem('userToken', user.accessToken)
      })
    )
  }

  logout() {
    sessionStorage.removeItem('userToken')
  }

  isLogged(): boolean {
    let userLogged = sessionStorage.getItem('userToken') || 'undefined'
    return userLogged !== 'undefined' ? true : false
  }
}
