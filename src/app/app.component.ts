import { Component } from '@angular/core';
import { Clases } from './classes'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  days: Clases[] = [
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

}
