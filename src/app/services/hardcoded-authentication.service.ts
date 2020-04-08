import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(userName, password){

    let response :boolean = false;

    if (userName === 'Agustin' && password === '1234') {
      sessionStorage.setItem('authenticatedUser', userName)
      response = true;
    } 
    return response;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser');

    return !(user === null);
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser');
  }

}
