import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyUploadFormPage } from './faculty-upload-form.page';

describe('FacultyUploadFormPage', () => {
  let component: FacultyUploadFormPage;
  let fixture: ComponentFixture<FacultyUploadFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyUploadFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyUploadFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
