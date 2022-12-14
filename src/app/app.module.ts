import { StarshipsServiceMockService } from 'src/app/mocks/starships-service-mock.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { StarshipsComponent } from './components/starships/starships.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { StarshipsService } from './services/starships.service';
import { StarshipDetailComponent } from './components/starship-detail/starship-detail.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PilotsComponent } from './components/pilots/pilots.component';
import { PilotDetailComponent } from './components/pilot-detail/pilot-detail.component';
import { FilmsComponent } from './components/films/films.component';
import { FilmDetailComponent } from './components/film-detail/film-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StarshipsComponent,
    LoginComponent,
    RegisterComponent,
    NavBarComponent,
    HeaderComponent,
    StarshipDetailComponent,
    PilotsComponent,
    PilotDetailComponent,
    FilmsComponent,
    FilmDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [StarshipsService,StarshipsServiceMockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
