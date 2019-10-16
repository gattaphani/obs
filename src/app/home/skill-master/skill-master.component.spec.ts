import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillMasterComponent } from './skill-master.component';

describe('SkillMasterComponent', () => {
  let component: SkillMasterComponent;
  let fixture: ComponentFixture<SkillMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
