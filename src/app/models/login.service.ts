import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Router } from "@angular/router";
import { User } from "./user";
import { json } from 'body-parser';

declare var window: any;
declare var FB: any;

@Injectable()
export class LoginService {

  apiRoot: string;
  me: User;

  constructor(private http: Http,private router: Router) {
    this.apiRoot = `//${window.location.hostname}:8081`; 
  }

   /*  window.fbAsyncInit = function () {
      FB.init({
        appId: "1853139358309932",
        cookie: true,
        xfbml: true,
        version: "v2.11"
      });
      FB.AppEvents.logPageView();
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = <HTMLScriptElement>d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }

 loginFB() {
    FB.login(
      (response: any) => {
        if (response.authResponse) {
          console.log(response);

          FB.api("/me?fields=name,email,picture", (response: any) => {
            console.log(response);
            this.login(
              response.name,
              "password",
              response.id,
              response.picture.data.url
            );
          });
        } else {
          console.log("User cancelled login or did not fully authorize.");
        }
      },
      { scopes: "email,user_photos,user_posts" }
    );
  }  */

  login(name: string, password: string, fbid?: string, picture?: string) {
    let exerciseArray: String[];
    this.http
    .post(this.apiRoot + "/userLogin/session/users", { 
      name, 
      password, 
      })
      .subscribe(
        data => {
          this.me = data.json();
          this.http.get(this.apiRoot + "/userLogin/exerciseArry").subscribe(data => {
            this.me.exerciseArray = data.json();
          });
          console.log(data);
        },
        err => {
          console.log(err);
        },
        () => { }
        );
    }
  }