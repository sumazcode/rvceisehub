import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { EventData } from '../model/events-model';
import { environment } from '../../environments/environment';

const BACKEND_URL = environment.apiUrl + '/events/';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private eventlist: EventData[] = [];
  private eventsUpdated = new Subject<EventData[]>();

  constructor(private http: HttpClient) {
  }

  getEventList() {
    this.http.get< { message: string, events: any }>(BACKEND_URL)
             .pipe(
               map(eventData => {
                 return eventData.events.map(event => {
                   return {
                     id: event._id,
                     title: event.title,
                     description: event.description,
                     venue: event.venue,
                     date: event.date,
                     time: event.time,
                     category: event.category,
                     rating: event.rating,
                   };
                 });
               })
             )
             .subscribe(transformedEvents => {
               this.eventlist = transformedEvents;
               this.eventsUpdated.next([...this.eventlist]);
               console.log(this.eventlist);
               console.log('Date is: ' + this.eventlist[0].date);
             });
  }

  getEventUpdateListener() {
    return this.eventsUpdated.asObservable();
  }

  get events() {
    return [...this.eventlist];
  }

  addEvent(event: EventData) {
    console.log(event);
    this.http.post< {message: string, eventId: string}>(BACKEND_URL, event)
                .subscribe(responseData => {
                  const id = responseData.eventId;
                  event.id = id;
                  this.eventlist.push(event);
                  this.eventsUpdated.next([...this.eventlist]);
                  console.log(responseData['_body']);
                } , error => {
                  console.log(error);
              });
  }

  deleteEvent(eventId: string) {
    this.http.delete(BACKEND_URL + eventId)
            .subscribe( () => {
              const updatedEvents = this.eventlist.filter(event => event.id !== eventId);
              this.eventlist = updatedEvents;
              this.eventsUpdated.next([...this.events]);
            });
  }
}
