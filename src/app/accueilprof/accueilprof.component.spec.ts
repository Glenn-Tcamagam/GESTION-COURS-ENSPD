import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilprofComponent } from './accueilprof.component';

describe('AccueilprofComponent', () => {
  let component: AccueilprofComponent;
  let fixture: ComponentFixture<AccueilprofComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccueilprofComponent]
    });
    fixture = TestBed.createComponent(AccueilprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
