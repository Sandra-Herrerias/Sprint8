import { ComponentFixture, TestBed, inject, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';
import { CommonModule, Location } from '@angular/common';
import { Router } from '@angular/router';


describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        RouterTestingModule.withRoutes([
         { path: 'login', component: HeaderComponent }
        ])
      ],
      declarations: [HeaderComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should go to Login component', async(inject([Router, Location], (router: Router, location: Location) => {

    let fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();

    fixture.debugElement.query(By.css('a.reg')).nativeElement.click();
    fixture.whenStable().then(() => {
      expect(location.path()).toEqual('/login');
      console.log('after expect');
    });
  })));
});
