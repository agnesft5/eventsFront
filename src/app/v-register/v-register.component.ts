import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-v-register',
  templateUrl: './v-register.component.html',
  styleUrls: ['./v-register.component.css']
})
export class VRegisterComponent {

  username: string;
  password: string;


  constructor(public _user: UserService) { }

  register(username, password): void {
    username = this.username;
    password = this.password;
    this._user.register(username, password)
  }


}
