import {  Component} from "@angular/core";
@Component(
{
    selector:'event-list',
    template:`
    <div>
        <h1>Upcoming Angular Events!</h1>
        <hr/>
        <event-thumbnail #thumbnail [event]="event1"></event-thumbnail>
        <button class="btn btn-primary" (click)="thumbnail.logFoo()">Log me some foo</button>
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
};