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
    setInterval(() => {
      let day = new Date()
      this.todaysday = day.getDay() - 1;

    }, 0.1)
  }
}
