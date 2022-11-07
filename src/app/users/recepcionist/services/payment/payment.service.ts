import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PaymentI } from 'src/app/users/interfaces/payment.interface';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private PAYMENT_URL = environment.PAY_API;

  constructor(private http : HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json', 
      'Access-Control-Allow-Origin': '**'
    })
  }

  // Pago
  payment(pay : PaymentI) : Observable<any>{
    return this.http.post(`${ this.PAYMENT_URL }/account/pago/`, pay,this.httpOptions);
  }


}
