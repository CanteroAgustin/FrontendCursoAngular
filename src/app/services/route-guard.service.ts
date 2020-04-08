import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor
    (private auth: HardcodedAuthenticationService,
      private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    let response: boolean = false;

    if (this.auth.isUserLoggedIn()) {
      response = true;
    } else {
      this.router.navigate(['login']);
    }

    return response;
  }
}
