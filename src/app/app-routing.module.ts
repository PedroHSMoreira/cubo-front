import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages/pages.component';
import { LoginGuard } from './login/guards/login.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  {
    path: '', component: PagesComponent,  canLoad: [LoginGuard], canActivate: [LoginGuard], children: [
      {
        path: '', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),  canActivateChild: [LoginGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
