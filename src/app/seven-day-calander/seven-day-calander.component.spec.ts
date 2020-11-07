import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SevenDayCalanderComponent } from './seven-day-calander.component';

describe('SevenDayCalanderComponent', () => {
  let component: SevenDayCalanderComponent;
  let fixture: ComponentFixture<SevenDayCalanderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SevenDayCalanderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SevenDayCalanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
