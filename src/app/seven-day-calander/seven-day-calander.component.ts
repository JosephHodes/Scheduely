import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {AssignmentModalComponent} from './../assignment-modal/assignment-modal.component'
import { Classes, Day, Test } from './../classes'

@Component({
  selector: 'app-seven-day-calendar',
  templateUrl: './seven-day-calander.component.html',
  styleUrls: ['./seven-day-calander.component.scss']
})
export class SevenDayCalanderComponent implements OnInit {

  @Input('days') fixedDays: Day[];
  @Output('DaySelected') DaySelected = new EventEmitter<Classes>();
  @Output('DeSelected') DeSelected = new EventEmitter<boolean>();
  convert12to24(time: string,) {
    let splitTime = time.split(' ');

    let hourMin = splitTime[0].split(":");

    if (hourMin[0] === '12') {
      hourMin[0] = '0';
    }
    if (splitTime[1] === 'pm') {
      hourMin[0] = (parseInt(hourMin[0], 10) + 12).toString();
    }
    if (hourMin[0] === '12' && splitTime[1] === 'PM') { hourMin[0] = '00'; }
    return hourMin[0] + ":" + hourMin[1];
  }

  convert24tomins(time: string) {
    let splitTime = time.split(':');
    return (parseInt(splitTime[0]) * 60) + splitTime[1];
  }
  dayOfWeekAsString(dayIndex) {
    return ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"][dayIndex] || '';
  }
  x = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  constructor(private ngb:NgbModal) {

    console.log(this.fixedDays);

  }
  onClick() {
    let x = this.ngb.open(AssignmentModalComponent, { backdrop: 'static', size: 'sm' })
    x.componentInstance.assignment = this.fixedDays
  }

  sorted: Test[]
  GetClass(classic: Classes) {
    this.DaySelected.emit(classic);
  }
  selectChangeHandler() {
    let x = false
    this.DeSelected.emit(x)
  }


  ngOnInit(): void {
    console.log(this.fixedDays)
  }

  // sortdayfunc(weekday: number) {
  //   const array = [];
  // this.days[0].classes = this.sortdayfunc(0);
  // this.days[1].classes = this.sortdayfunc(1);
  // this.days[2].classes = this.sortdayfunc(2);
  // this.days[3].classes = this.sortdayfunc(3);
  // this.days[4].classes = this.sortdayfunc(4);
  // this.days[5].classes = this.sortdayfunc(5);
  // this.days[6].classes = this.sortdayfunc(6);
  //   for (let currentclass = 0; this.days[currentclass].classes.length > currentclass; currentclass++) {
  //     // let splitValues = this.days[weekday].classes[currentclass].split(' ');
  //     let finalevalue = parseInt(this.convert24tomins(this.convert12to24(splitValues[1] + " " + splitValues[2])));
  //     array.push({
  //       name: splitValues[0],
  //       value: finalevalue
  //     });
  // //   }

  //   //   let x = array.sort((a, b) => { return a.value - b.value });
  // for (let o = 0; x.length > o; o++) {

  //   x.splice(o);
  //   o++;
  // }
  // return x;
  //   }
}


