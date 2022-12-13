import { Component, Input } from '@angular/core';
import { Starship } from 'src/app/model/starship';

@Component({
  selector: 'app-pilots',
  templateUrl: './pilots.component.html',
  styleUrls: ['./pilots.component.css']
})
export class PilotsComponent {

  @Input() starshipDetails!: Starship;
}
