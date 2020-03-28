import {  Component} from "@angular/core";
@Component(
{
    selector:'event-list',
    template:`
    <div>
        <h1>Angular events!</h1>
        <hr/>
        <div class="row">
            <div *ngFor ="let event of events" class="col-md-5" >
                <event-thumbnail [event]="event"></event-thumbnail>
            </div>
        </div>
    </div>
    `
})

export class EventListComponent{
     events = [
        {name:'Angular Connect', date: '9/26/2036', time: '10:00 am', location: {address: '1 London Road ', city: 'London', country: 'England'}, format:"InPerson"},
        {name:'ng-conf 2037', date: '4/15/2037', time: '9:00 am', onlineUrl: 'https://www.ng-conf.org/', format:"Online"},
        {name:'Future Conf (Location/Url TBD)', date: '6/10/2037', time: '8:00 am'},
        {name:'UN Angular Summit', date: '6/10/2037', time: '8:00 am', location: {address: 'The UN Angular Center', city: 'New York', country: 'USA'}, format:"InPerson"}
      ]
};