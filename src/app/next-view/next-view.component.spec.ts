import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextViewComponent } from './next-view.component';

describe('NextViewComponent', () => {
  let component: NextViewComponent;
  let fixture: ComponentFixture<NextViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NextViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
