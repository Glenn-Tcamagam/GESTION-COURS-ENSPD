import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilinitialComponent } from './accueilinitial.component';

describe('AccueilinitialComponent', () => {
  let component: AccueilinitialComponent;
  let fixture: ComponentFixture<AccueilinitialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccueilinitialComponent]
    });
    fixture = TestBed.createComponent(AccueilinitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
