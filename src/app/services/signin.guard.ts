import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../shared/token.service';

@Injectable({
  providedIn: 'root'
})
export class SigninGuard implements CanActivate {

  constructor(
    private tokenService: TokenService,
    private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const isAuthenticate = this.tokenService.checkToken()
    
      if(isAuthenticate){
        return this.router.navigate(['']);
      }
      return true;
  }
  
}
