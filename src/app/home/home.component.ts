import { Component, OnInit } from '@angular/core';
import { User } from '../models';
import { UserService } from '../_auth';



@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: User[] = []

  constructor( private userService: UserService ) { }

  ngOnInit() {
    this.userService.getUsers()
    .subscribe(users => {
      this.users = users
    });
  }

}
