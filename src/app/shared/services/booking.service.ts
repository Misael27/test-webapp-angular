import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Booking } from '../models';
import { environment } from '../../../environments/environment'
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  getAll(email: string) : Observable<Array<Booking>> {

    const currentUser = this.authService.currentUserValue;
    let Url =  environment.BASE_API_URL+"/user" + "/" + email + "/bookings";
  
    return this.http.get<Array<Booking>>(Url,{headers:{"app":"APP_BCK",adminemail:currentUser.email, token:currentUser.sessionTokenBck}, params:{current:"true"}});
    
  }
}
