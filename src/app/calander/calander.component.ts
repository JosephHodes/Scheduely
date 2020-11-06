import { Component, OnInit } from '@angular/core';
import * as moment from 'moment'
@Component({
  selector: 'app-calander',
  templateUrl: './calander.component.html',
  styleUrls: ['./calander.component.css']
})
export class CalanderComponent implements OnInit {
  datefunc:Date;
  numberofdaysinthismonth:number;
  constructor() { }

  ngOnInit(): void {
    setInterval(()=>{
      this.datefunc = new Date();
    },)
    
  }

}
