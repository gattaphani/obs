import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResoucetypeComponent } from './resoucetype.component';

describe('ResoucetypeComponent', () => {
  let component: ResoucetypeComponent;
  let fixture: ComponentFixture<ResoucetypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResoucetypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResoucetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
