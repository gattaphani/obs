import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeparationtypeComponent } from './separationtype.component';

describe('SeparationtypeComponent', () => {
  let component: SeparationtypeComponent;
  let fixture: ComponentFixture<SeparationtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeparationtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeparationtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
