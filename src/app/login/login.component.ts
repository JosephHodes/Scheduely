import { Component, OnInit } from '@angular/core';
import {calendarComponent} from './../calender/calendar.component';
import {GetjsonService} from './../getjson.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public auth:GetjsonService) { }

  ngOnInit(): void {
  }

}
