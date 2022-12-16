import { StarshipDetailComponent } from './components/starship-detail/starship-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { StarshipsComponent } from './components/starships/starships.component';
import { GuardroutesGuard } from './security/guardroutes.guard';
import { PilotDetailComponent } from './components/pilot-detail/pilot-detail.component';
import { FilmDetailComponent } from './components/film-detail/film-detail.component';

const routes: Routes = [{
  path: 'home',
  component: HomeComponent
},
{
  path: 'starships',
  component: StarshipsComponent,
  canActivate: [GuardroutesGuard]
},
{
  path: 'detail',
  component: StarshipDetailComponent
},{
  path: 'pilotDetail',
  component: PilotDetailComponent
},
{
  path: 'filmDetail',
  component: FilmDetailComponent
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'register',
  component: RegisterComponent
},
{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},
{
  path: '**',
  redirectTo: '/home',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
