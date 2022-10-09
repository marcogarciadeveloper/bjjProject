import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: string, password: string){
    console.log(this.isUserLoggedIn)
    sessionStorage.setItem('authenticateUser', username)
    if(username ==='marco' && password ==='marco'){
      return true;
    } 
    return false;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticateUser');

    return !(user == null)
  }
}
