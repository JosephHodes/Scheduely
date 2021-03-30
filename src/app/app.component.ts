import { Component, OnDestroy, OnInit } from '@angular/core'
import { classes, Day } from './classes'
import { GetjsonService } from './getjson.service'
import { Observable, pipe, Subscription } from 'rxjs'
import { map } from 'rxjs/operators'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { AssignmentModalComponent } from './assignment-modal/assignment-modal.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  JsonSub: Subscription
  FixedDays: Day[]



  constructor(private getserv: GetjsonService, private modalService: NgbModal) {

  }

  ngOnInit() {

  }

  ngOnDestroy() {
    // if (this.JsonSub) {
    //   this.JsonSub.unsubscribe()
    //   console.log(this.FixedDays)
    // }
  }

  // DaySelected(data: Classes) {
  //   this.SelectedDayClass = data
  // }

  // checkifdeslected(data: boolean) {
  //   this.deselected = data
  // }

  // openModal() {
  //   const modalRef = this.modalService.open(AssignmentModalComponent, { size: 'xl', backdrop: 'static' }) // open the AssignmentModalComponent (which we import above) as a component
  //   modalRef.componentInstance.assignment = this.FixedDays
  // }

}
