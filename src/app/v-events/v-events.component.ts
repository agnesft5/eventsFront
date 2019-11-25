import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Subscription } from 'rxjs';
import { stringify } from 'querystring';

@Component({
  selector: 'app-v-events',
  templateUrl: './v-events.component.html',
  styleUrls: ['./v-events.component.css']
})
export class VEventsComponent {

  events: any //subs.
  arrEvents: object[] = []

  subsEvents: Subscription;

  //vars
  name: string;
  location: string;
  date: string;
  hour: string;
  price: string;

  constructor(public _user: UserService) {


    this.subsEvents = this._user.events.subscribe(
      (newValue) => {
        this.events = newValue;
        this.arrEvents = this.events;
      })






  }

  ngOnInit() {
    this._user.getEvents();
  }

  postEvent(eventDate: string, eventName: string, time: string, location: string, price: string) {
    eventDate = this.date;
    eventName = this.name;
    time = this.hour;
    location = this.location;
    price = this.price;
    this._user.postEvent(eventDate, eventName, time, location, price)
  }

}
