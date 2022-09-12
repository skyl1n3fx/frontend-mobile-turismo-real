import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserI } from '../../interfaces/user.interface';
import { retry, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl : string = environment.baseUrl;
  private _auth : UserI | undefined;

    // Cabecera HTTP Options
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json', //va en formato JSON
        'Access-Control-Allow-Origin': '**'
      })
    }
  

  constructor(private http: HttpClient) { }

  get auth() : UserI{
    return { ...this._auth! }
  }

  // Método que permite el inicio de sesión en la app
  login(user : UserI):Observable<any>{
    return this.http.post(`${ this.baseUrl }/login/`, user,this.httpOptions).pipe(
      tap( user => this._auth = user)
      );
  }


}
