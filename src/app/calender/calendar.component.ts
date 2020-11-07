import { Component, OnInit } from '@angular/core';
// import * as moment from 'moment'
import { MatGridListModule } from '@angular/material/grid-list';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})

//fix this whole god damn file bad code bad code bad code
export class calendarComponent implements OnInit {
  datefunc: Date;
  numberofdaysinthismonth: number;
  calendar: string[] = [];

  daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }
  generateCalendar() {
    while (this.numberofdaysinthismonth > this.calendar.length) {
      this.calendar.push("")
    }
  }
  constructor() {

  }
  setVariables() {
    this.numberofdaysinthismonth = this.daysInMonth(this.datefunc.getMonth(), this.datefunc.getFullYear());
  }
  ngOnInit(): void {
    setInterval(() => {
      this.datefunc = new Date();
      this.setVariables();
      this.generateCalendar();

    }, 0.1)


  }
  oof(i: number) {
    console.log(i);
  }
}
