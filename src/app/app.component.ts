import { Component } from '@angular/core';
import { Classes } from './classes'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Calendar'
  deselected: boolean = true;
  days: Classes[] = [

    {
      weekday: 'Monday',
      classes: ['Math', 'English', 'Physics', 'English', 'Physics', 'English', 'Physics', 'English', 'Physics']
    },
    {
      weekday: 'Tuesday',
      classes: ['Music', 'Art', 'Gym']
    },
    {
      weekday: 'Wednesday',
      classes: ['Math', 'English', 'Physics']
    },
    {
      weekday: 'Thursday',
      classes: ['Music', 'Art', 'Gym']
    },
    {
      weekday: 'Friday',
      classes: ['Math', 'English']
    },
    {
      weekday: 'Saturday',
      classes: []
    },
    {
      weekday: 'Sunday',
      classes: []
    },
  ]
  SelectedDayClass: Classes;
  DaySelected(data: Classes) {
    this.SelectedDayClass = data;
  }
  checkifdeslected(data: boolean) {
    this.deselected = data;
  }
}
