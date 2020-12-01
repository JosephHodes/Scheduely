import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { GetjsonService } from '../getjson.service';


@Component({
  selector: 'app-setting-modal',
  templateUrl: './setting-modal.component.html',
  styleUrls: ['./setting-modal.component.scss']
})
export class SettingModalComponent implements OnInit {


  constructor(public auth :GetjsonService, public activeModal:NgbActiveModal) { }

  ngOnInit(): void {
  }
  closeModal(): void {
    this.activeModal.dismiss()

  }

}
