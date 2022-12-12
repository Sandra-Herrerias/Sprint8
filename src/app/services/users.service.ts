import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersStored!: User[];
 
  private allusers$ = new Subject<User[]>();

  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;


  constructor(private route: Router) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')!));//estat inicial del BehaviorSubject
    this.user = this.userSubject.asObservable();////part public del Behabiour Subject que s'hi actualitza
    this.usersStored = [];
  }

  login(user: User) {
    this.usersStored = JSON.parse(localStorage.getItem('users')!);
    console.log(this.usersStored);
    console.log(user.username);

    const userFound = this.usersStored.find((userLogged) => {
      return userLogged.username === user.username && userLogged.password === user.password;
    });

    console.log(userFound);


    if (typeof userFound !== "undefined") {
      localStorage.setItem('currentUser', JSON.stringify(userFound));
      console.log("USER QUE EXISTEIX: " + JSON.stringify(userFound));
      console.log(JSON.stringify(user));
      this.userSubject.next(userFound);
      this.route.navigate(['/starships']);

    } else {
      console.log("NO EXISTEIX: " + JSON.stringify(userFound));
      alert("Wrong credentials");
     
    }

    console.log(user.password);
   
  }


  logout(): void {
    localStorage.removeItem("currentUser");
    this.userSubject.next(JSON.parse(null!));

    this.route.navigate(['/home'])
      .then(() => {
        window.location.reload();
      });
  }

  register(user: User) {

    this.usersStored = JSON.parse(localStorage.getItem('users')!);

    console.log(this.usersStored);
    if (this.usersStored == null) {
      this.usersStored = [];
    }

    this.usersStored.push(user);
    console.log(this.usersStored);

    localStorage.setItem('users', JSON.stringify(this.usersStored));
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.allusers$.next(this.usersStored);
    console.log(this.allusers$);
  }




  getUsers$(): Observable<User[]> {
    return this.allusers$.asObservable();
  }

  public usuariData(): User | any {
    // return this.usuariSubject;
    return this.userSubject.value;
  }
}