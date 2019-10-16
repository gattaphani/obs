import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubbusinessunitComponent } from './subbusinessunit.component';

describe('SubbusinessunitComponent', () => {
  let component: SubbusinessunitComponent;
  let fixture: ComponentFixture<SubbusinessunitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubbusinessunitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubbusinessunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
