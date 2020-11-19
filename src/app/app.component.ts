import { Component, OnDestroy, OnInit } from '@angular/core';
import { Classes, Day } from './classes'
import { GetjsonService } from './getjson.service'
import { pipe, Subscription } from 'rxjs'
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  JsonSub: Subscription;
  FixedDays: Day[];
  Title = 'Calendar'
  deselected: boolean = true;
  SelectedDayClass: Classes;


  DaySelected(data: Classes) {
    this.SelectedDayClass = data;
  }
  checkifdeslected(data: boolean) {
    this.deselected = data;
  }
  constructor(private getserv: GetjsonService) {

  }
  dayArray: Day[];

  ngOnInit() {
    this.finaleJson()
    setInterval(() => {
      this.dayArray = this.FixedDays
    }, 1000)
  }
  ngOnDestroy() {
    if (this.JsonSub) {
      this.JsonSub.unsubscribe();
      console.log(this.FixedDays);
    }
  }
  finaleJson() {
    this.JsonSub = this.getserv.getDays().subscribe(res =>
      this.FixedDays = (res.payload.data() as Day[]))
  }
}
