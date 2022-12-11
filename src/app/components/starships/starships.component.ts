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
  constructor(private serviceStarships: StarshipsService,
    private router:Router) { }

  ngOnInit(): void {

    this.getList();
  }

  getList():void{
      this.serviceStarships.getStarships().subscribe( data => {
      this.starships = data.results;
    });
  }

  getDetail(e:any){

    //this.router.navigateByUrl('/detail');
    this.router.navigate(['/detail'], {queryParams: {url: e.url}});
  }

}
