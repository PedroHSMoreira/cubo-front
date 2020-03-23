import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SharedModule } from '../shared/shared.module';
import { ContentComponent } from './content/content.component';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { TopBarComponent } from './topbar/topbar.component';
import { TableComponent } from './content/table/table.component';
import { ChartComponent } from './content/chart/chart.component';


const routes: Routes = [
  { path: 'home', component: PagesComponent }
]


@NgModule({
  declarations: [PagesComponent, ContentComponent, TopBarComponent, TableComponent, ChartComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class PagesModule {

  constructor() {}

}
