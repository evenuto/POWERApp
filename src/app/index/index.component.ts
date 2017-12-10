import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayDate(){
    const options = {weekday:'long', year:'numeric', month:'long', day:'numeric'};
    const dateOutput = new Date().toLocaleDateString('en-US', options);
    return dateOutput;
  }

}
