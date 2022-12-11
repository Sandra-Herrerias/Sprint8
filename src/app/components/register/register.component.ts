import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/model/user';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  submitted = false;
  message: string = "";

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UsersService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });


  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
   
    // stop here if form is invalid
    if (this.registerForm.valid) {
      console.log("valid");
      this.userService.register(this.registerForm.value);
    }else{
      console.log("no valid");
 return;
    }
console.log(this.registerForm.value);
      
  }
}

