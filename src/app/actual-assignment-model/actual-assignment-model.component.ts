import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Day } from '../classes';

@Component({
  selector: 'app-actual-assignment-model',
  templateUrl: './actual-assignment-model.component.html',
  styleUrls: ['./actual-assignment-model.component.scss']
})
export class ActualAssignmentModelComponent implements OnInit {
  @Input('dayselected') class
  @Input('day') day
  public AssignmentForm: FormGroup
  constructor(public activeModal: NgbActiveModal, private fb:FormBuilder) { }
  City: any = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday']

  ngOnInit(): void {
    this.AssignmentForm=  this.fb.group({
      name: ['', [Validators.required]],
      type: ['', [Validators.required]]
    })
  }

  closeModal(): void {
    this.activeModal.dismiss();
  }
  onsubmit(){
    console.log(this.day)
  }

}
