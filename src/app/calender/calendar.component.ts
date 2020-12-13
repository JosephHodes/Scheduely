
// import * as moment from 'moment'
import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { Classes, Day } from './../classes'
import { GetjsonService } from './../getjson.service'
import { Observable, pipe, Subscription } from 'rxjs'
import { map } from 'rxjs/operators'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { AssignmentModalComponent } from './../assignment-modal/assignment-modal.component'

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})

//fix this whole god damn file bad code bad code bad code
export class calendarComponent implements OnInit {
  @Input('Data') Data;
  JsonSub: Subscription
  FixedDays: Day[]
  FixedDay$: Observable<Day[]>
  Title = 'Calendar'
  deselected: boolean = true
  SelectedDayClass: Classes
  dayArray: Day[]
  Dayindex:number


  constructor(private getserv: GetjsonService, private modalService: NgbModal) {

  }

  ngOnInit() {
    this.FixedDay$ = this.getserv.getDays(this.Data);
    this.JsonSub = this.FixedDay$.subscribe(next => {

      if (next.length > 0)
        this.FixedDays = next
      // for (let i=0;this.FixedDays.length>0;i++)
      // {
      //   for (let x = 0; this.FixedDays[i].classes; x++){
      //     this.FixedDays[i].classes[x].start_time = _.sortBy()
      //   }
      // }
    }, err => {
      console.log(err)
    })

  }

  ngOnDestroy() {
    if (this.JsonSub) {
      this.JsonSub.unsubscribe()
      console.log(this.FixedDays)
    }
  }

  DaySelected(data: Classes) {
    this.SelectedDayClass = data
  }

  checkifdeslected(data: boolean) {
    this.deselected = data
  }
 getdayIndex(Event){
this.Dayindex=Event
console.log(Event)
 }
  // openModal() {
  //   const modalRef = this.modalService.open(AssignmentModalComponent, { size: 'xl', backdrop: 'static' }) // open the AssignmentModalComponent (which we import above) as a component
  //   modalRef.componentInstance.assignment = this.FixedDays
  // }
}
