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

@NgModule({
  declarations: [
    AppComponent,
    calendarComponent,
    DayCalendarComponent,
    NextViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
