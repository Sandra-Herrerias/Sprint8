import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StarshipsService } from 'src/app/services/starships.service';

import { PilotsComponent } from './pilots.component';

describe('PilotsComponent', () => {
  let component: PilotsComponent;
  let fixture: ComponentFixture<PilotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PilotsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PilotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: StarshipsService, useValue: {} }
      ],
    });
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/

});
