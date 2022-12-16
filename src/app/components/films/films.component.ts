import { Component, Input, OnInit } from '@angular/core';
import { Starship } from 'src/app/model/starship';
import { StarshipsService } from 'src/app/services/starships.service';
import { Router } from '@angular/router';
import { Film } from 'src/app/model/film';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent {
  @Input() starshipDetails!: Starship;

  films: Film[] = [];

  constructor(private serviceStarships: StarshipsService, private router: Router) {}

  public handleMissingImage(event: Event) {
    (event.target as HTMLImageElement).src = "../../../../../assets/img/starships/big-placeholder.jpg";
  }

  ngOnInit(): void {
    this.getFilms();
   
  }


  getFilms(): void {
    this.starshipDetails.films!.forEach((film: string) => {

      this.serviceStarships.getResource(film).subscribe((data: any) => {

        data.id = data.url.split('/')[5];
        this.films.push(data);
        console.log(this.films);
      });
    });
  }

  getDetail(e:any) {
    console.log(e);
    this.router.navigate(['/filmDetail'], {queryParams: {url: e.url}});
  }
}
