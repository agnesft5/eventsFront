import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-v-login',
  templateUrl: './v-login.component.html',
  styleUrls: ['./v-login.component.css']
})
export class VLoginComponent {

  username: string;
  password: string;

  logged: boolean = false

  constructor(public _user: UserService) { }

  login(username: string, password: string): void {
    username = this.username;
    password = this.password;
    this._user.login(username, password);
    this.logged = true;
  }

}
