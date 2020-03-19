import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SharedModule } from '../shared/shared.module';
import { ContentComponent } from './content/content.component';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { TopBarComponent } from './topbar/topbar.component';


const routes: Routes = [
  { path: '', component: PagesComponent }
]


@NgModule({
  declarations: [PagesComponent, ContentComponent, TopBarComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class PagesModule {

  constructor() {
    setTimeout(() => {
      sessionStorage.removeItem('userToken')
    }, 3600000);
  }

}
