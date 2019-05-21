import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsRateFormPage } from './students-rate-form.page';

describe('StudentsRateFormPage', () => {
  let component: StudentsRateFormPage;
  let fixture: ComponentFixture<StudentsRateFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsRateFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsRateFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
