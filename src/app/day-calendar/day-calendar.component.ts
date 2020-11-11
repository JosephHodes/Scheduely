import { Component, Input, OnInit } from '@angular/core';
import { Clases } from './../classes'
@Component({
  selector: 'app-day-calendar',
  templateUrl: './day-calendar.component.html',
  styleUrls: ['./day-calendar.component.scss']
})
export class DayCalendarComponent implements OnInit {
  @Input() days: Clases[];
  constructor() { }
  todaysday: number;
  ngOnInit(): void {
    setInterval(() => {
      let day = new Date()
      this.todaysday = day.getDay();

    }, 0.1)

  }

}
