import {  Component} from "@angular/core";
@Component(
{
    selector:'event-list',
    template:`
    <div>
        <h1>Upcoming Angular Events!</h1>
        <hr/>
        <event-thumbnail (eventClick)="eventClickedHandler($event)" [event]="event1"></event-thumbnail>
    </div>
    `
})

export class EventListComponent{
    const: any 
    event1 = {
        name:'ngConf 2025', 
        date: '3/1/2025', 
        time: '8am',
        price:100, 
        location: {address: '123 Main St', city: 'Salt Lake City, UT', country: 'USA'}
    }

    eventClickedHandler(data)
    {
        console.log("received :" + data)
    }
};