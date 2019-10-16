import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KyeComponent } from './kye.component';

describe('KyeComponent', () => {
  let component: KyeComponent;
  let fixture: ComponentFixture<KyeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KyeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
