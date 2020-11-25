import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { calendarComponent } from './calender/calendar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';

import { DayCalendarComponent } from './day-calendar/day-calendar.component';
import { NextViewComponent } from './next-view/next-view.component';
import { SevenDayCalanderComponent } from './seven-day-calander/seven-day-calander.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { firebasestuff } from './../apikey/apikey';
import { AssignmentModalComponent } from './assignment-modal/assignment-modal.component'

@NgModule({
  declarations: [
    AppComponent,
    calendarComponent,
    DayCalendarComponent,
    NextViewComponent,
    SevenDayCalanderComponent,
    AssignmentModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    CommonModule, NgScrollbarModule, NgbModule, HttpClientModule,
    AngularFireModule.initializeApp(firebasestuff),
    AngularFireModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
