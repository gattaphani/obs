import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeeducationComponent } from './employeeeducation.component';

describe('EmployeeeducationComponent', () => {
  let component: EmployeeeducationComponent;
  let fixture: ComponentFixture<EmployeeeducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeeducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeeducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
