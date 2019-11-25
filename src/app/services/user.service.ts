import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  registerRes: object;
  registered: string;

  loginRes: object;

  events: Subject<object> = new Subject<object>();
  arrEvents: {};

  postResult:Subject<object> = new Subject<object>();
  postRes:{};



  constructor(
    public _http: HttpClient,
    public _router: Router
  ) { }


  register(username: string, password: string): void {
    this._http.post('http://localhost:3000/register',
      {
        'username': username,
        'password': password
      },
      { headers: new HttpHeaders({ "x-requested-witdh": "XMLHResponse" }) }
    ).subscribe((result) => {
      this.registerRes = result;
      this.registered = this.registerRes['status']
      console.log(this.registered);
    })
  }

  login(username: string, password: string): void {
    this._http.post('http://localhost:3000/login',
      {
        'username': username,
        'password': password
      },
      { headers: new HttpHeaders({ "x-requested-witdh": "XMLHResponse" }) }
    ).subscribe((result) => {
      this.loginRes = result;
      if (this.loginRes['status'] == 'You are logged now') {
        setTimeout(() => {
          this._router.navigateByUrl('/events')
        }, 3000)

      } else {
        setTimeout(() => {
          this._router.navigateByUrl('/register')
        }, 5000)

      }
    })
  }

  getEvents() {
    this._http.get('http://localhost:3000/events'
    ).subscribe((result) => {
      this.arrEvents = result
      this.events.next(result)
    })
  }


  postEvent(eventDate, eventName, time, location, price){
    this._http.post('http://localhost:3000/event', {
      'eventName': eventName,
      'eventDate': eventDate,
      'time': time,
      'location': location,
      'price': price
    }).subscribe((result)=>{
      this.postResult.next(result);
      this.postRes = result;
      console.log(this.postRes)
    })
  }


}
