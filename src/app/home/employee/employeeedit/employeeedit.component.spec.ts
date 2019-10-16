import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeeditComponent } from './employeeedit.component';

describe('EmployeeeditComponent', () => {
  let component: EmployeeeditComponent;
  let fixture: ComponentFixture<EmployeeeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
