import { Component, OnInit } from '@angular/core';
import { StarshipsService } from 'src/app/services/starships.service';
import { Starship } from 'src/app/model/starship';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-starship-detail',
  templateUrl: './starship-detail.component.html',
  styleUrls: ['./starship-detail.component.css']
})
export class StarshipDetailComponent implements OnInit {

  starshipSelected!: Starship;
  urlRoute!: string;
  imgId!:string;
  pilots:boolean = false;
  films:boolean = false;

  constructor(private serviceStarships: StarshipsService,
    private route: ActivatedRoute) {

  }

  public handleMissingImage(event: Event) {
    (event.target as HTMLImageElement).src =  "../../../assets/img/starships/big-placeholder.jpg";
  }


  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
      this.urlRoute = params['url'];
    });

    this.getStarshipSelected();
    this.imgId = this.urlRoute.split('/')[5];
    console.log(this.imgId);
    
  }

  getStarshipSelected() {
    this.serviceStarships.getResource(this.urlRoute).subscribe(data => {
      this.starshipSelected = data;
     
      if (this.starshipSelected.pilots!.length != 0) { 
        this.pilots = true;
      }

      if (this.starshipSelected.films!.length != 0) { 
        this.films = true;
      }
    });
  }
}
