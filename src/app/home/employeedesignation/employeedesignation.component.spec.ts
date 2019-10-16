import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeedesignationComponent } from './employeedesignation.component';


describe('EmployeeDesignationComponent', () => {
  let component: EmployeedesignationComponent;
  let fixture: ComponentFixture<EmployeedesignationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeedesignationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeedesignationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

