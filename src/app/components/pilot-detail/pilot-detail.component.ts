import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pilot } from 'src/app/model/pilot';
import { StarshipsService } from 'src/app/services/starships.service';

@Component({
  selector: 'app-pilot-detail',
  templateUrl: './pilot-detail.component.html',
  styleUrls: ['./pilot-detail.component.css']
})
export class PilotDetailComponent implements OnInit {

  pilotDetails!: Pilot;
  urlRoute!: string;
  pilotImg!: string;
  pilotFilm!: string;
  id!: string;


  constructor(private serviceStarships: StarshipsService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.urlRoute = params['url'];
    });

    this.getPilotSelected();
    this.getPilotImg();
  }

  getPilotSelected() {
    this.serviceStarships.getResource(this.urlRoute).subscribe(data => {
      this.pilotDetails = data;
    });
  }

  getPilotImg(): void {
    this.serviceStarships.getResource(this.urlRoute!).subscribe((data: any) => {

      this.id = data.url.split('/')[5];
      this.pilotImg = this.id;
    });
  }
}
