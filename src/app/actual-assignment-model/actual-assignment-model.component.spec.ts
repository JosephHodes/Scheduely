import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualAssignmentModelComponent } from './actual-assignment-model.component';

describe('ActualAssignmentModelComponent', () => {
  let component: ActualAssignmentModelComponent;
  let fixture: ComponentFixture<ActualAssignmentModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualAssignmentModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualAssignmentModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
