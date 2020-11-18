import { Component, OnDestroy, OnInit } from '@angular/core';
import { Classes, Day } from './classes'
import { GetjsonService } from './getjson.service'
import { Subscription } from 'rxjs'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  JsonSub: Subscription;
  FixedDays: Day[];
  Title = 'Calendar'
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
  constructor(private getserv: GetjsonService) {

  }


  ngOnInit() {
    this.finaleJson();
  }
  ngOnDestroy() {
    if (this.JsonSub) {
      this.JsonSub.unsubscribe();
    }
  }
  finaleJson() {
    this.JsonSub = this.getserv.getJSON().subscribe(res => {
      this.FixedDays = res;

    },
      err => console.log(err)
    )
  }
}
