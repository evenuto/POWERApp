import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import { Session, User } from '../models/user';
import { LoginService } from '../models/login.service';
import { Router } from '@angular/router';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-workout-track',
  templateUrl: './workout-track.component.html',
  styleUrls: ['./workout-track.component.css']
})
export class WorkoutTrackComponent implements OnInit {

   constructor() { }

  ngOnInit() {
  }
  outputCardio(){
    const cardioArray = new Array();

    if((<HTMLInputElement>document.getElementById("cardio")).value != "")
    {
        cardioArray.push((<HTMLInputElement>document.getElementById("cardio")).value + " for " 
            + (<HTMLInputElement>document.getElementById("duration")).value + " minutes" + "<br>");
        $("#output").append('<span>' + cardioArray[cardioArray.length - 1] + '</span>');
        (<HTMLInputElement>document.getElementById("cardio")).value = "";
        (<HTMLInputElement>document.getElementById("duration")).value = "";
    }
  }

  outputLifts(){
      const liftArray = new Array();

      if((<HTMLInputElement>document.getElementById("lift")).value != "")
      {
        if ((<HTMLInputElement>document.getElementById('kg')).checked == true) {
            var selected = (<HTMLInputElement>document.getElementById('kg')).value;
          }
        else if ((<HTMLInputElement>document.getElementById('lb')).checked == true) {
            var selected = (<HTMLInputElement>document.getElementById('lb')).value;
        }
          
        liftArray.push((<HTMLInputElement>document.getElementById("lift")).value + " " 
              + (<HTMLInputElement>document.getElementById("weight")).value
              + selected + " "
              + (<HTMLInputElement>document.getElementById("set")).value + "x" +
              +  (<HTMLInputElement>document.getElementById("repetition")).value + "<br>");
          $("#output").append('<span>' + liftArray[liftArray.length - 1] + '</span>');
          (<HTMLInputElement>document.getElementById("lift")).value = "";
          (<HTMLInputElement>document.getElementById("weight")).value = "";
          (<HTMLInputElement>document.getElementById("kg")).checked = false;
          (<HTMLInputElement>document.getElementById("lb")).checked = false;
          (<HTMLInputElement>document.getElementById("set")).value = "";
          (<HTMLInputElement>document.getElementById("repetition")).value = "";

      }
  } 
//   submitProgress(){
//     this.loginservice.submitProgress(this.list.myArray.toString());
//   }
/*
  session = new Session();
  me: User;

  
  constructor(private http: Http, public login: LoginService, private router: Router) { }

  ngOnInit() {
      if(this.login.me == null){
          this.router.navigate(['/login']);
      }
      this.me = this.login.me;
      setInterval(()=> this.update(), 1000)
  }

  update(){
      this.http.get(this.login.apiRoot + "/user/session").subscribe( data =>{
          this.session = data.json();
      });
  }

  
   submitQuote(e: MouseEvent, i: number){
      e.preventDefault();
      const data = { text: quote.text, user: this.me.name };
      this.http.post(this.login.apiRoot + "/user/sessiongame/room/quotes", data).subscribe(res=>{
          this.me.quotes.splice(i, 1);
          this.me.quotes.push( res.json() );            
      })
  } */


}
