import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { retry, catchError} from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Bookings } from '../../interfaces/bookings.interface';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private BASE_URL = environment.TURISMO_REAL_API;

  constructor(private http : HttpClient) { }

  getBooking(id: number):Observable<any>{
    return this.http.get(`${ this.BASE_URL }/business-api/booking/booking-receptionist/?pk=${id}`).pipe(retry(3));
  }


}
