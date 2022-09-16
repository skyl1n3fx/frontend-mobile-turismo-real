import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/auth/authentication.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {

  constructor(private authSv : AuthenticationService, private router : Router){}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.authSv.authVerify()
    .pipe(
      tap(authenticated => {
        console.log(authenticated);
        if(!authenticated){
          this.router.navigate(['/login/']);
        }
      })
      );
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> {
    return this.authSv.authVerify()
    .pipe(
      tap(authenticated => {
        if(!authenticated){
          this.router.navigate(['/login/']);
        }
      })
      );;
  }
}
