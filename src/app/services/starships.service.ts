import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, Subject } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Starship } from '../model/starship';

@Injectable({
  providedIn: 'root'
})

export class StarshipsService {

  //private starshipChoosen$ = new Subject<any>();
  //url!: any;
  constructor(private http: HttpClient) { }

  getStarships(page: number): Observable<Starship[]> {

    return this.http.get(
      `https://swapi.dev/api/starships/?page=${page}`
    ) as Observable<Starship[]>;
  }


  getResource(url: string): Observable<any> {
    return this.http.get(url);
  }



}
