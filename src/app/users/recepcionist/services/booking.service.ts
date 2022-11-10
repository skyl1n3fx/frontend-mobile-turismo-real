import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { retry, catchError} from 'rxjs/operators';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private BASE_URL = environment.TURISMO_REAL_API;

  constructor(private http : HttpClient) { }

  getBooking():Observable<any>{
    return this.http.get(`${ this.BASE_URL } /account/pago/`).pipe(retry(3));
  }


}
