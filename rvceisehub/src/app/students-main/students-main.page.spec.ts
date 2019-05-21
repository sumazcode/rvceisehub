import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsMainPage } from './students-main.page';

describe('StudentsMainPage', () => {
  let component: StudentsMainPage;
  let fixture: ComponentFixture<StudentsMainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsMainPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsMainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
