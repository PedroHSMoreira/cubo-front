import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';
import { NotificationService } from '../shared/snackbar/services/notification.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  constructor(
    private loginService: LoginService,
    private fb: FormBuilder,
    private router: Router,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]]
    })
    this.loginService.logout()
  }

  login() {
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).pipe(
      take(1)
    ).subscribe(user => {
        this.notificationService.notify(`Welcome ${user.name}`, 'success')
    }, errorRes => this.notificationService.notify(errorRes.error.message, 'danger'),
      () => {
        this.router.navigate(['home'])
      })
  }

}
