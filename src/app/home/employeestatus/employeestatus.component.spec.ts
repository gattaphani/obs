import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeestatusComponent } from './employeestatus.component';

describe('EmployeestatusComponent', () => {
  let component: EmployeestatusComponent;
  let fixture: ComponentFixture<EmployeestatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeestatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeestatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
