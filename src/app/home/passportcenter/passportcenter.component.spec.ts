import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassportcenterComponent } from './passportcenter.component';

describe('PassportcenterComponent', () => {
  let component: PassportcenterComponent;
  let fixture: ComponentFixture<PassportcenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassportcenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassportcenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
