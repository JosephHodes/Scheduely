import { TestBed } from '@angular/core/testing';

import { SevenDayCalendarService } from './seven-day-calendar.service';

describe('SevenDayCalendarService', () => {
  let service: SevenDayCalendarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SevenDayCalendarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
