import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { Classes } from './../classes'
import { AssignmentModalComponent } from './../assignment-modal/assignment-modal.component'
import {ActualAssignmentModelComponent} from './../actual-assignment-model/actual-assignment-model.component'
@Component({
  selector: 'app-day-calendar',
  templateUrl: './day-calendar.component.html',
  styleUrls: ['./day-calendar.component.scss']
})
export class DayCalendarComponent implements OnInit {
  @Input() days: Classes[];
  @Input('SelectedDay') SelectedDay: Classes;
  @Input('deslected') deselected: boolean;
  constructor(private ngb: NgbModal) { }
  onClick() {
    let x = this.ngb.open(ActualAssignmentModelComponent, { backdrop: 'static', size: 'sm' })
    x.componentInstance.assignment = this.days
    x.componentInstance.data
  }
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
