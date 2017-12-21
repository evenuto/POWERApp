import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../models/login.service';
import { User } from '../models/user';
import { Injectable } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";
import { Http } from "@angular/http";

declare var window: any;
declare var FB: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
    name: string;
    password: string;
    me: User;
    apiRoot: string;
    ngOnInit() {
        
    }
  
    constructor(
      private http: Http,
      private router: Router,
      private share: LoginService
    ) {}
  
    // loginFB() {
    //   this.share.loginFB();
    // }
  
    login(name: string, password: string, fbid?: string, picture?: string) {
      this.share.login(name, password, fbid, picture);
    }
  }