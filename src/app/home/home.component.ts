import { Component, OnInit } from '@angular/core';
import { BookingService } from '../shared/services';
import { Booking } from '../shared/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private bookings:Array<Booking>;
  private bookingsSelected:Array<Booking>;
  private searchText1: string = "";
  private searchText2: string = "";
  private filter1: string = "";
  private filter2: string = "";


  constructor(
    private bookingService: BookingService
  ) { }

  ngOnInit() {
    this.bookingService.getAll("contacto@tuten.cl").subscribe( data => {
      this.bookings = data;
      this.bookingsSelected = data;
    });
  }


  getSelected(filterType: string, op: number) {

    if (op == 1) { //filter by bookingId
      this.filter1 = filterType;
    }
    else if (op==2) { //filter by price
      this.filter2 = filterType;
    }

    this.bookingsSelected = this.bookings.filter(s => {
      switch(this.filter1) {
        case ">=" : {
          return (this.searchText1 == "" || !isNaN(parseInt(this.searchText1)) && s.bookingId >= parseInt(this.searchText1));
        }
        case "<=" : {
          return this.searchText1 == "" || !isNaN(parseInt(this.searchText1)) && s.bookingId <= parseInt(this.searchText1);
        }
        default : {
          return this.searchText1 == "" || s.bookingId.toString().includes(this.searchText1);
        }
      }
    });

    this.bookingsSelected = this.bookingsSelected.filter(s => {
      switch(this.filter2) {
        case ">=" : {
          return (this.searchText2 == "" || !isNaN(parseInt(this.searchText2)) && s.bookingPrice >= parseInt(this.searchText2));
        }
        case "<=" : {
          return this.searchText2 == "" || !isNaN(parseInt(this.searchText2)) && s.bookingPrice <= parseInt(this.searchText2);
        }
        default : {
          return this.searchText2 == "" || s.bookingPrice.toString().includes(this.searchText2);
        }
      }
    });
  
  }

}
