import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from 'src/app/model/film';
import { StarshipsService } from 'src/app/services/starships.service';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent {

  filmDetails!: Film;
  urlRoute!: string;
  filmImg!:string;
  id!:string;
  constructor(private serviceStarships: StarshipsService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.urlRoute = params['url'];
    });
    console.log(this.urlRoute);
    this.getFilmSelected();
    this. getFilmImg();
  }

  getFilmSelected() {
    this.serviceStarships.getResource(this.urlRoute).subscribe(data => {
      this.filmDetails = data;
     
      console.log(this.filmDetails);
    });
  }

  getFilmImg(): void {
    this.serviceStarships.getResource(this.urlRoute!).subscribe((data: any) => {

      this.id = data.url.split('/')[5];
      this.filmImg= this.id;

      console.log( this.id);

    });
}
}
