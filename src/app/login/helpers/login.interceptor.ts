import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthInterceptor implements HttpInterceptor {

    constructor(private loginService: LoginService, private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.loginService.isLogged()) {
            const accessToken = sessionStorage.getItem('userToken')
            const authReq = req.clone({
                setHeaders: {
                    'Authorization': `Bearer ${accessToken}`
                }
            })
            return next.handle(authReq)
        } else {
            return next.handle(req);
        }
    }
}