import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { EventsService } from '../services/events.service';
import { EventData } from '../model/events-model';

@Component({
  selector: 'app-events-form',
  templateUrl: './events-form.page.html',
  styleUrls: ['./events-form.page.scss'],
})

export class EventsFormPage implements OnInit {
  form: FormGroup;
  submitted = false;
  private eventData: EventData;

  constructor(private eventService: EventsService) { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      description: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(180)]
      }),
      venue: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      date: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      category: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      })
    });
  }

  onCreateForm() {
    this.submitted = true;
    console.log(this.form);

    if (this.form.invalid) {
      return;
    }
    this.eventData = new EventData(null,
                                  this.form.value.title,
                                  this.form.value.description,
                                  this.form.value.venue,
                                  this.form.value.date,
                                  '10.00',
                                  this.form.value.category,
                                  5);
    console.log(this.form.value.date);
    this.eventService.addEvent(this.eventData);
  }
}
