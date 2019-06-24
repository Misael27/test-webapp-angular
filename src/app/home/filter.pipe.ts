import { Pipe, PipeTransform } from '@angular/core';
import { Booking } from '../shared/models';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText1?:string, filter1?:string, searchText2?:string, filter2?:string): any[] {
    if(!items) return [];
		return items.filter( (it:Booking) =>  this.checkBookingIdItem(it,searchText1,filter1) && this.checkPriceItem(it,searchText2,filter2));
   }

   checkBookingIdItem(item:Booking, searchText:string, filter:string) {
      switch(filter) {
        case ">=" : {
          return  (searchText == "" || !isNaN(parseInt(searchText)) && item.bookingId >= parseInt(searchText));
        }
        case "<=" : {
          return  searchText == "" || !isNaN(parseInt(searchText)) && item.bookingId <= parseInt(searchText);
        }
        default : {
          return searchText == "" || item.bookingId.toString().includes(searchText);
        }
      }
    }

    checkPriceItem(item:Booking, searchText:string, filter:string) {
      switch(filter) {
        case ">=" : {
          return (searchText == "" || !isNaN(parseInt(searchText)) && item.bookingPrice >= parseInt(searchText));
        }
        case "<=" : {
          return searchText == "" || !isNaN(parseInt(searchText)) && item.bookingPrice <= parseInt(searchText);
        }
        default : {
          return searchText == "" || item.bookingPrice.toString().includes(searchText);
        }
      }
    }

}



