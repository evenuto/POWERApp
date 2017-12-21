import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http } from "@angular/http";
import { Router } from '@angular/router';
import { User } from '../models/user';
import { LoginService } from '../models/login.service'

declare var jquery:any;
declare var $ :any;


@Component({
  selector: 'app-workout-track',
  templateUrl: './workout-track.component.html',
  styleUrls: ['./workout-track.component.css'],
encapsulation: ViewEncapsulation.None
})
export class WorkoutTrackComponent implements OnInit {  

  constructor(private http: Http, private router: Router, private userLogin: LoginService){ }
  me: User;
  ngOnInit() {
    // if (this.userLogin.me == null) {
    //   this.router.navigate(["/login"]);
    // }
    this.me = this.userLogin.me;
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

  //  this.me.exerciseArray.push(cardioArray[cardioArray.length-1]);
  }  

   /* outputCardio(){
    if((<HTMLInputElement>document.getElementById("cardio")).value != ""){

    this.me.exerciseArray.push((<HTMLInputElement>document.getElementById("cardio")).value + " for " 
    + (<HTMLInputElement>document.getElementById("duration")).value + " minutes");
    $("#output").append('<span>' + this.me.exerciseArray[this.me.exerciseArray.length - 1] + '</span>');
    (<HTMLInputElement>document.getElementById("cardio")).value = null;
    (<HTMLInputElement>document.getElementById("duration")).value = null;

   }
  } 
 */
  /*  outputLifts(){
    if((<HTMLInputElement>document.getElementById("lift")).value != "")
    {
    this.me.exerciseArray.push((<HTMLInputElement>document.getElementById("lift")).value + " " 
    + (<HTMLInputElement>document.getElementById("weight")).value
     + " "
    + (<HTMLInputElement>document.getElementById("set")).value + "x" +
    +  (<HTMLInputElement>document.getElementById("repetition")).value);
    $("#output").append('<span>' + this.me.exerciseArray[this.me.exerciseArray.length - 1] + '</span>');$("#output").append('<span>' + this.me.exerciseArray[this.me.exerciseArray.length - 1] + '</span>');
        (<HTMLInputElement>document.getElementById("lift")).value = null;
        (<HTMLInputElement>document.getElementById("weight")).value = null;
        (<HTMLInputElement>document.getElementById("kg")).checked = false;
        (<HTMLInputElement>document.getElementById("lb")).checked = false;
        (<HTMLInputElement>document.getElementById("set")).value = null;
        (<HTMLInputElement>document.getElementById("repetition")).value = null;
   }
    } */


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
}