import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { retry, tap } from 'rxjs/operators';
import { AuthI } from '../../interfaces/auth.interface';
import { UserI } from '../../interfaces/user.interface';
import { LocalstorageService } from '../../../services/browser_data/localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl : string = environment.baseUrl;
  private _auth : AuthI | undefined;

    // Cabecera HTTP Options
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json', //va en formato JSON
        'Access-Control-Allow-Origin': '**'
      })
    }
  

  constructor(private http: HttpClient, private localstorageSv : LocalstorageService) { }

  get auth() : AuthI{
    return { ...this._auth! }
  }

  // Método que permite el inicio de sesión en la app
  login(user : UserI):Observable<any>{
    return this.http.post(`${ this.baseUrl }/login/`, user,this.httpOptions)
    .pipe(
      tap( data => {this._auth = data , this.localstorageSv.set("usuario",this._auth)})
      );
  }


}
