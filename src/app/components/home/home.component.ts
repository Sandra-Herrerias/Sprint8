import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser!: User;
  users: User[] = [];

   constructor(private userService: UsersService) {
        //this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
  ngOnInit(): void {
  }

}
