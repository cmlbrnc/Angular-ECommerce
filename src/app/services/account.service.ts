import { Injectable } from '@angular/core';
import { User } from '../login/user';

@Injectable()
export class AccountService {

  constructor() { }
  loggedIn =false;
  login(user:User):boolean {

    if(user.username=="cemil" && user.password=="12345" ){

      this.loggedIn=true;
      localStorage.setItem("isLogged",user.username);
      return true;
    
    }

    return false;

  
  }
  isLoggedIn() {
    return this.loggedIn;
  }
  LogOut() {
    localStorage.removeItem("isLogged");
    this.loggedIn=false;
  }
}
