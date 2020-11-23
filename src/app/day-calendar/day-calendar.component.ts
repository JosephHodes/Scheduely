import { Component, Input, OnInit } from '@angular/core';

import { Classes } from './../classes'
@Component({
  selector: 'app-day-calendar',
  templateUrl: './day-calendar.component.html',
  styleUrls: ['./day-calendar.component.scss']
})
export class DayCalendarComponent implements OnInit {
  @Input() days: Classes[];
  @Input('SelectedDay') SelectedDay: Classes;
  @Input('deslected') deselected: boolean;
  constructor() { }

  todaysday: number;
  ngOnInit(): void {

    let day = new Date()
    this.todaysday = day.getDay()
    if (this.todaysday === 0) {
      this.todaysday = + 6;
    } else {
      this.todaysday--;
    }
    console.log(this.todaysday)

  }
}
