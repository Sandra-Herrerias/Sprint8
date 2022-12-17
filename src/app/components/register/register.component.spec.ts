import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { RegisterComponent } from './register.component';
import { DebugElement } from '@angular/core';
import { BrowserModule, By } from '@angular/platform-browser';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
        BrowserModule
    ],
      declarations: [ RegisterComponent ]
    })
    .compileComponents().then(() =>{
      fixture = TestBed.createComponent(RegisterComponent);
      component = fixture.componentInstance;

      de = fixture.debugElement.query(By.css('form'));
      el = de.nativeElement;
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invalid', async(() => {
    component.registerForm.controls['firstName'].setValue('');
    component.registerForm.controls['lastName'].setValue('');
    component.registerForm.controls['username'].setValue('');
    component.registerForm.controls['password'].setValue('');
    expect(component.registerForm.valid).toBeFalsy();
  }));

  it('form should be valid', async(() => {
    component.registerForm.controls['firstName'].setValue('Ahsetrh');
    component.registerForm.controls['lastName'].setValue('rfgvset');
    component.registerForm.controls['username'].setValue('sandra@gmail.com');
    component.registerForm.controls['password'].setValue('123456');
    expect(component.registerForm.valid).toBeTruthy();
  }));
});
