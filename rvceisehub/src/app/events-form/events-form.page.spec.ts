import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsFormPage } from './events-form.page';

describe('EventsFormPage', () => {
  let component: EventsFormPage;
  let fixture: ComponentFixture<EventsFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
