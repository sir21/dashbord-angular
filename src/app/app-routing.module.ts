import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './home/table/table.component';
import { StyleComponent } from './home/style/style.component';


const routes: Routes = [
  { path: '', component: LandingComponent },
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: '', component: TableComponent, data: { animation: 'table' } },
      { path: 'style', component: StyleComponent, data: { animation: 'style' } }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
