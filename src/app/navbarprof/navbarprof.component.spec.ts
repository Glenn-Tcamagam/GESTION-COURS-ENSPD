import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarprofComponent } from './navbarprof.component';

describe('NavbarprofComponent', () => {
  let component: NavbarprofComponent;
  let fixture: ComponentFixture<NavbarprofComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarprofComponent]
    });
    fixture = TestBed.createComponent(NavbarprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
