import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessunitComponent } from './businessunit.component';

describe('BusinessunitComponent', () => {
  let component: BusinessunitComponent;
  let fixture: ComponentFixture<BusinessunitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessunitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
