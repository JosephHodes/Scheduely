import { Component, OnInit, Input } from '@angular/core'
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
import { Day, classes } from '../classes';
import {GetjsonService} from './../getjson.service';
import { Observable, pipe, Subscription } from 'rxjs'
@Component({
  selector: 'app-assignment-modal',
  templateUrl: './assignment-modal.component.html',
  styleUrls: ['./assignment-modal.component.scss']
})
export class AssignmentModalComponent implements OnInit {
  @Input('assignment') assignment: Day[];
  @Input('Data') Data;
  isSubmitted = false;
  todaysday: number;
  public ClassForm: FormGroup

  dayorclass:boolean=false;
  selectedNumber=22;
  City: any = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday']
  constructor(public activeModal: NgbActiveModal, public fb: FormBuilder, private worker:GetjsonService) {

  }
  // arrayRemove(arr, value) {
  //
  //   return arr.filter(function (ele) {
  //     return ele != value;
  //   });
  // }
getTimezone:any;
  ngOnInit(): void {
    this.getTimezone= new Date().getTimezoneOffset()
    let day = new Date()
    this.todaysday = day.getDay()
    if (this.todaysday === 0) {
      this.todaysday = + 6;
    } else {
      this.todaysday--;
    }
console.log(this.getTimezone)
    this.ClassForm = this.fb.group({
      weekday: ['Monday', [Validators.required]],
      name:['', [Validators.required]],
      teacher:['', [Validators.required]],
      start_time:['', [Validators.required]],
      duration:['', [Validators.required]]
    })

  }
  city:String =''
  closeModal(): void {
    this.activeModal.dismiss()

  }

  changeCity(e) {
    console.log(this.city)
    this.cityName.setValue(this.city, {
      onlySelf: true
    })
    this.selectedNumber= parseInt(e.target.value.substring(0,1));
    if(typeof this.assignment[this.selectedNumber].classes !== 'undefined'){
      this.selectedNumber-=100;
    }
    if(e.value = undefined){
      this.selectedNumber==8;
    }
    console.log(this.selectedNumber)
  }

  openClassform(){
    this.dayorclass=!this.dayorclass
  }

  get cityName() {
    return this.ClassForm.get('cityName');
  }

  isThereClass() {
    // !(selectedNumber<0 &&!(selectedNumber==8)); else ClassForm
    return true
  }

  onSubmit() {
    this.isSubmitted = true
    console.log(this.ClassForm.getRawValue())
    let formValues = this.ClassForm.getRawValue()
    let weekday = this.ClassForm.get('weekday').value
    let weekdayIndex = this.City.indexOf(weekday)
    // console.log(weekdayIndex)
    // console.log(this.assignment[weekdayIndex])
    let newClass: classes = {
      name: formValues.name,
      teacher: formValues.teacher,
      start_time: formValues.start_time,
      duration: formValues.duration,
      assignments: []
    }
    this.assignment[weekdayIndex].classes.push(newClass)
    const docdata = { docdata:this.assignment}
    console.log(this.Data)
    this.worker.pushdata(docdata,this.Data)
  }
// its too week no centeral government no president no justice system and no way to pay for
}
