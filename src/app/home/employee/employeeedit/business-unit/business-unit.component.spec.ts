import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessUnitComponent } from './business-unit.component';

describe('BusinessUnitComponent', () => {
  let component: BusinessUnitComponent;
  let fixture: ComponentFixture<BusinessUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
