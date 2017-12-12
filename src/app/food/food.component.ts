import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  outputFood(){
    const foodArray = new Array();

    if((<HTMLInputElement>document.getElementById("food")).value != "")
    {
        foodArray.push((<HTMLInputElement>document.getElementById("food")).value);
        $("#output-food").append('<span>' + foodArray[foodArray.length - 1] + '</span>');
        (<HTMLInputElement>document.getElementById("food")).value = "";
    }
  }


}
