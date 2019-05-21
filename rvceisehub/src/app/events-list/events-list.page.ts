import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { EventData } from '../model/events-model';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.page.html',
  styleUrls: ['./events-list.page.scss'],
})
export class EventsListPage implements OnInit {
  eventList: EventData[];
  isLoading = false;
  private eventsSub: Subscription;

  constructor(private eventService: EventsService) { }

  ngOnInit() {
    console.log('in List component: ngOnInit!');
    this.isLoading = true;
    this.eventService.getEventList();

    this.eventsSub = this.eventService.getEventUpdateListener()
                                      .subscribe((events: EventData[]) => {
                                        this.isLoading = false;
                                        this.eventList = events;
                                      });
  }

  deleteEvent(eventId: string) {
    this.eventService.deleteEvent(eventId);
  }
}
