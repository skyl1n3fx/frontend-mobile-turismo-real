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

  private baseUrl = environment.TURISMO_REAL_API;

  constructor(private http: HttpClient) { }

  getBooking(id: number): Observable<any>{
    return this.http.get(`${ this.baseUrl }/business-api/booking/booking-receptionist/?pk=${id}`).pipe(retry(3));
  }

  getBookingDetail(id: number): Observable<any>{
    return this.http.get(`${ this.baseUrl }/business-api/booking/${id}`);
  }

  changeCheckin(id: number, state: string): Promise<any>{
    return this.http.put(`${ this.baseUrl }/business-api/booking/${id}/change-checkin/`, {estado: state}).toPromise( );
  }

  changeCheckout(id: number, state: string): Promise<any>{
    return this.http.put(`${ this.baseUrl }/business-api/booking/${id}/change-checkout/`, {estado: state}).toPromise( );
  }

  getProductsDetail(id: number): Promise<any>{
    return this.http.get(`${ this.baseUrl }/business-api/booking/products-details/?pk=${id}`).toPromise();
  }

  changeProductsState(checkList: any): Promise<any>{
    // eslint-disable-next-line @typescript-eslint/naming-convention
    return this.http.post(`${ this.baseUrl }/business-api/booking/products-details/`, {check_list: checkList}).toPromise();
  }
}
