import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../models/login.service';
import { User, Session } from '../models/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name: string;
  password: string;

  constructor(private user: LoginService, private router: Router) { }
  
      ngOnInit() {
      }
  
      login(){
          this.user.login(this.name, this.password)
      }
      loginFB(){
          this.user.loginFB();
      }
}
