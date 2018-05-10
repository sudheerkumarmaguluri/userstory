import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherToClassComponent } from './teacher-to-class.component';

describe('TeacherToClassComponent', () => {
  let component: TeacherToClassComponent;
  let fixture: ComponentFixture<TeacherToClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherToClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherToClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
