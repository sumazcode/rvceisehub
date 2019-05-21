import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsRegisterFormPage } from './students-register-form.page';

describe('StudentsRegisterFormPage', () => {
  let component: StudentsRegisterFormPage;
  let fixture: ComponentFixture<StudentsRegisterFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsRegisterFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsRegisterFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
