import { Component, OnInit, Input } from '@angular/core'
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
import { Day } from '../classes';

@Component({
  selector: 'app-assignment-modal',
  templateUrl: './assignment-modal.component.html',
  styleUrls: ['./assignment-modal.component.scss']
})
export class AssignmentModalComponent implements OnInit {
  @Input('assignment') assignment: Day[];
  @Input() Day: Day[]
  @Input() Dayselected: any
  isSubmitted = false;
  todaysday: number;

  dayorclass:boolean=false;
 selectedNumber=22;
  City: any = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday']
  constructor(public activeModal: NgbActiveModal, public fb: FormBuilder) {

  }
  arrayRemove(arr, value) {

    return arr.filter(function (ele) {
      return ele != value;
    });
  }

  ngOnInit(): void {
    let day = new Date()
    this.todaysday = day.getDay()
    if (this.todaysday === 0) {
      this.todaysday = + 6;
    } else {
      this.todaysday--;
    }
  }

  closeModal(): void {
    this.activeModal.dismiss()

  }

  changeCity(e) {
    console.log(e.value)
    this.cityName.setValue(e.target.value, {
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
ClassForm = this.fb.group({
    cityName: ['', [Validators.required]],
    name:['', [Validators.required]],
    teacher:['', [Validators.required]],
    start_time:['', [Validators.required]],
    duration:['', [Validators.required]],  })

    openClassform(){
      this.dayorclass=!this.dayorclass
    }
  get cityName() {
    return this.ClassForm.get('cityName');
  }
  onSubmit() {
    this.isSubmitted = true;
    if (!this.ClassForm.valid) {
      return false
    } else {
      alert(JSON.stringify(this.ClassForm.value))
    }
  }

}
