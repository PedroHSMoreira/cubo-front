import { Injectable } from '@angular/core';
import { CanLoad, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Route, CanActivateChild, Router } from '@angular/router';
import { LoginService } from 'src/app/login/services/login.service';
import { NotificationService } from 'src/app/shared/snackbar/services/notification.service';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanLoad, CanActivate, CanActivateChild{

  constructor(private loginService: LoginService, private notificationService: NotificationService, private router: Router) { }

  checkIsLogged(): boolean {
    const loggedIn = this.loginService.isLogged()
    if(!loggedIn) {
        this.router.navigate(['login'])
    }
    return loggedIn
  }

  canLoad(route: Route): boolean {
    return this.checkIsLogged()
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkIsLogged()
  }
  
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.checkIsLogged()
  }

}