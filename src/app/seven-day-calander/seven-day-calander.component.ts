import { Component, Input, OnInit } from '@angular/core';
import { Classes, test } from './../classes'

@Component({
  selector: 'app-seven-day-calendar',
  templateUrl: './seven-day-calander.component.html',
  styleUrls: ['./seven-day-calander.component.scss']
})
export class SevenDayCalanderComponent implements OnInit {

  // days: Classes[] = [
  //   {
  //     weekday: 'Monday',
  //     classes: ['Math 12:00 am', 'English 2:00 pm', 'Physics 1:00 am']
  //   },
  //   {
  //     weekday: 'Tuesday',
  //     classes: ['Music 11:00 pm', 'Art 1:00 pm', 'Gym 3:00 pm']
  //   },
  //   {
  //     weekday: 'Wednesday',
  //     classes: ['Math 1:00 pm', 'English 2:00 am', 'Physics 4:00 pm']
  //   },
  //   {
  //     weekday: 'Thursday',
  //     classes: ['Music 4:00 am', 'Art 5:00 pm', 'Gym 3:00 am']
  //   },
  //   {
  //     weekday: 'Friday',
  //     classes: ['Math 3:00 pm', 'English 2:00 am']
  //   },
  //   {
  //     weekday: 'Saturday',
  //     classes: ['']
  //   },
  //   {
  //     weekday: 'Sunday',
  //     classes: ['']
  //   }
  // ]
  @Input('days') days: Classes[];
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
  constructor() {

    // this.convert24tomins(this.convert12to24(x[1] + " " + x[2]));
    // console.log(x);
  }
  sorted: test[]
  sortdayfunc(weekday: number) {
    const array = [];

    for (let currentclass = 0; this.days[currentclass].classes.length > currentclass; currentclass++) {
      let splitValues = this.days[weekday].classes[currentclass].split(' ');
      let finalevalue = parseInt(this.convert24tomins(this.convert12to24(splitValues[1] + " " + splitValues[2])));
      array.push({
        name: splitValues[0],
        value: finalevalue
      });
    }

    let x = array.sort((a, b) => { return a.value - b.value });
    for (let o = 0; x.length > o; o++) {

      x.splice(o);
      o++;
    }
    return x;
  }
  ngOnInit(): void {
    console.log(this.days)
    // this.days[0].classes = this.sortdayfunc(0);
    // this.days[1].classes = this.sortdayfunc(1);
    // this.days[2].classes = this.sortdayfunc(2);
    // this.days[3].classes = this.sortdayfunc(3);
    // this.days[4].classes = this.sortdayfunc(4);
    // this.days[5].classes = this.sortdayfunc(5);
    // this.days[6].classes = this.sortdayfunc(6);
    console.log(this.days)
  }

}


