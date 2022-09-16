import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { environment } from 'src/environments/environment';
import { map, retry, tap } from 'rxjs/operators';
import { AuthI } from '../../interfaces/auth.interface';
import { UserI } from '../../interfaces/user.interface';
import { LocalstorageService } from '../../../services/browser_data/localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private TURISMO_REAL_API : string = environment.TURISMO_REAL_API;
  private _auth : AuthI | undefined;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json', //va en formato JSON
      'Access-Control-Allow-Origin': '**'
    })
  }


  constructor(private http: HttpClient, private localstorageSv : LocalstorageService) {
  }

  get auth() : AuthI{
    return { ...this._auth! }
  }

  // Método que permite el inicio de sesión en la app
  login(user : UserI):Observable<any>{
    return this.http.post(`${ this.TURISMO_REAL_API }/login/`, user,this.httpOptions)
    .pipe(
      tap( data => {this._auth = data , this.localstorageSv.set("usuario",this._auth)})
      );
  }

  authVerify():Observable<boolean>{

    let user = this.localstorageSv.get("usuario");

    if(user.token === undefined){
      return of(false);
    }

  
  
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json', 
        'Access-Control-Allow-Origin': '**',
        'Authorization': 'token ' + user.token
      })
    }
      

    return this.http.get(`${ this.TURISMO_REAL_API }/refresh-token/`,this.httpOptions).pipe(
    tap( data => { this._auth = this.localstorageSv.get("usuario"), this._auth.token = data['token'] , this.localstorageSv.set("usuario",this._auth) } )
    ).
    pipe(map(x => { return true; })); 
  

  }

  logout(token : string):Observable<any>{
    // Eliminar data del local storage
    this.localstorageSv.remove("usuario");
    return this.http.post(`${ this.TURISMO_REAL_API }/logout/`,{ 'token' : token },this.httpOptions).pipe(retry(2));
  }


}
