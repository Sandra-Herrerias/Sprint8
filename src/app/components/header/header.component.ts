import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedIn!: User | null;

  constructor(public router: Router, private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.user.subscribe((result: User) => {
      console.log(result); 
     if (result) {
       this.loggedIn = {
         firstName: result.firstName, 
         lastName: result.lastName, 
         password: result.password, 
         username: result.username,
         id:result.id
       };
     }
    
     // console.log(this.loggedIn)
   })
  }

  logout(): void {
    this.userService.logout();
  }


}
