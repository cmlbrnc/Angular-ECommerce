import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  
  constructor(private accountService:AccountService) { }
  model:User=new User();
  ngOnInit() {
  }
  login(form:NgForm) {
    this.accountService.login(this.model)
   console.log(this.accountService.login(this.model));
  }

}
