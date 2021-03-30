import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Validators, FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { Day } from '../classes';
import { GetjsonService } from '../getjson.service';

@Component({
  selector: 'app-actual-assignment-model',
  templateUrl: './actual-assignment-model.component.html',
  styleUrls: ['./actual-assignment-model.component.scss']
})
export class ActualAssignmentModelComponent implements OnInit {
 isSubmitted:boolean =false
  @Input('data')  data:Day[]
  selectedNumber = 22; 
  City: any = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday']
  dayorclass: boolean = false;
  public AssignmentForm: FormGroup
  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder, private worker: GetjsonService) { }

  ngOnInit(): void {
    this.AssignmentForm=  this.fb.group({
      weekday: ['Monday', [Validators.required]],
      name: ['', [Validators.required]],
      type: ['', [Validators.required]]
    })
  }

  closeModal(): void {
    this.activeModal.dismiss();
  }
  onSubmit() {
    this.isSubmitted = true
    console.log(this.AssignmentForm.getRawValue())
    let formValues = this.AssignmentForm.getRawValue()
    let weekday = this.AssignmentForm.get('weekday').value
    let weekdayIndex = this.City.indexOf(weekday)
    // console.log(weekdayIndex)
    // console.log(this.assignment[weekdayIndex])
    let assignment: any = {
      name: formValues.name,
      type: formValues.type
    }
    this.data[weekdayIndex].classes[0].assignments.push(assignment)
    const docdata = { docdata: this.data}
    // console.log(this.Data)
    this.worker.pushdata(docdata, this.data)
    this.activeModal.close()
  }
  changeCity(e) {
    console.log(this.City)
    this.cityName.setValue(this.City, {
      onlySelf: true
    })
    this.selectedNumber = parseInt(e.target.value.substring(0, 1));
    if (typeof this.data[this.selectedNumber].classes !== 'undefined') {
      this.selectedNumber -= 100;
    }
    if (e.value = undefined) {
      this.selectedNumber == 8;
    }
    console.log(this.selectedNumber)
  }

  openAssignmentForm() {
    this.dayorclass = !this.dayorclass
  }

  get cityName() {
    return this.AssignmentForm.get('cityName');
  }

}
// get class day input 
// then after that get which class 
//label the assignment 
// then label types