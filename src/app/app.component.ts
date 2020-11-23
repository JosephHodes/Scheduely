import { Component, OnDestroy, OnInit } from '@angular/core';
import { Classes, Day } from './classes'
import { GetjsonService } from './getjson.service'
import { Observable, pipe, Subscription } from 'rxjs'
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  JsonSub: Subscription;
  FixedDays: Day[];
  FixedDay$: Observable<Day[]>
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
    this.FixedDay$ = this.getserv.getDays()
    this.JsonSub = this.FixedDay$.subscribe(next => this.FixedDays = next)
  }
  ngOnDestroy() {
    if (this.JsonSub) {
      this.JsonSub.unsubscribe();
      console.log(this.FixedDays);
    }
  }

}
