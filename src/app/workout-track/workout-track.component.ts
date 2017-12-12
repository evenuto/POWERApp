import { Component, OnInit } from '@angular/core';
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

}
