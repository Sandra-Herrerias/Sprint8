import { Component, Input, OnInit } from '@angular/core';
import { Pilot } from 'src/app/model/pilot';
import { Starship } from 'src/app/model/starship';
import { StarshipsService } from 'src/app/services/starships.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pilots',
  templateUrl: './pilots.component.html',
  styleUrls: ['./pilots.component.css']
})
export class PilotsComponent implements OnInit {

  @Input() starshipDetails!: Starship;

  pilots: Pilot[] = [];
  characterId!: string;
  // pilotsIds: string[]=[];

  constructor(private serviceStarships: StarshipsService, private router: Router) {

  }

  public handleMissingImage(event: Event) {
    (event.target as HTMLImageElement).src = "../../../../../assets/img/starships/big-placeholder.jpg";
  }

  ngOnInit(): void {
    this.getPilots();
  }


  getPilots(): void {
    this.starshipDetails.pilots!.forEach((pilot: string) => {

     
      //this.pilotsIds.push(this.characterId);
      // console.log(this.pilotsIds);

      this.serviceStarships.getResource(pilot).subscribe((data: any) => {
    
       data.id = data.url.split('/')[5];
      console.log(data.id);
        console.log(data.id);
        this.pilots.push(data);

      });
    });
  }

  navigate() {
    this.router.navigate(['/pilotDetail']);
  }


}
