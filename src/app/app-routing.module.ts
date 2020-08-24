import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//importar rutas
import {RouterModule, Routes} from '@angular/router';
//imposrtar componente herores
import{HeroesComponent} from './heroes/heroes.component'
// importar dashboard 
import {DashboardComponent} from './dashboard/dashboard.component'
//imposrat hero details
import {HeroDetailComponent} from './hero-detail/hero-detail.component'
//crear una constante
 const routes:Routes=[
    {path:'',redirectTo:'/dashboard',pathMatch:'full'},
   {path: 'heroes', component:HeroesComponent},
  { path: 'dashboard', component:DashboardComponent},
   {path:'detail/:id', component:HeroDetailComponent}
 ];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
