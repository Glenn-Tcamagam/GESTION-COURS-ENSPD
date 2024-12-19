import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarinitialComponent } from './navbarinitial.component';

describe('NavbarinitialComponent', () => {
  let component: NavbarinitialComponent;
  let fixture: ComponentFixture<NavbarinitialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarinitialComponent]
    });
    fixture = TestBed.createComponent(NavbarinitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
