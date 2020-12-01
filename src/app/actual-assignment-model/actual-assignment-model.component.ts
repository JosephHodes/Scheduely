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
  @Input('assignment') assignment: Day[];
  public AssignmentForm: FormGroup
  constructor(public activeModal: NgbActiveModal, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.AssignmentForm=  this.fb.group({
      name: ['Monday', [Validators.required]]
    })
  }

  closeModal(): void {
    this.activeModal.dismiss();
  }
}
