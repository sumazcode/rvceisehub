import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyListPage } from './faculty-list.page';

describe('FacultyListPage', () => {
  let component: FacultyListPage;
  let fixture: ComponentFixture<FacultyListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
