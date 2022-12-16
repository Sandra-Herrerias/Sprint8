import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Starship } from 'src/app/model/starship';
import { StarshipsService } from 'src/app/services/starships.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  starships:Array<Starship> = [];
  starship!:Starship;
  page = 1;
  throttle = 0;
  distance = 2;

  constructor(private serviceStarships: StarshipsService,
    private router:Router) { }

  ngOnInit(): void {

    this.getList();
  }

  getList():void{
      this.serviceStarships.getStarships(this.page).subscribe( (data:any) => {
      this.starships = data.results;
    });
  }


  onScroll(): void {
    this.serviceStarships
      .getStarships(++this.page)
      .subscribe((data: any) => {
        this.starships.push(...data.results);
      });
  }

  getDetail(e:any){

    this.router.navigate(['/detail'], {queryParams: {url: e.url}});
  }

}
