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
  @Input('assignment') assignment: any
  @Input() Day: Day[]
  @Input() Dayselected: any
  isSubmitted = false;
  todaysday: number
  City: any = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Thursday', 'Sunday']
  constructor(public activeModal: NgbActiveModal, public fb: FormBuilder) {
    this.City = this.arrayRemove(this.City, this.todaysday);
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
  }
  registrationForm = this.fb.group({
    cityName: ['', [Validators.required]]
  })
  get cityName() {
    return this.registrationForm.get('cityName');
  }
  onSubmit() {
    this.isSubmitted = true;
    if (!this.registrationForm.valid) {
      return false;
    } else {
      alert(JSON.stringify(this.registrationForm.value))
    }
  }

}
