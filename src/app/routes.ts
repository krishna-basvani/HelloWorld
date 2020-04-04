import {Routes} from '@angular/router'
import {EventListComponent} from './events/event-list.component'
import {EventDetailsComponent} from './events/event-details/event-details.component'
import {Error404Component} from './error/404.component'

export const appRoutes:Routes=[
    {path:'events', component:EventListComponent},
    {path:'events/:id', component:EventDetailsComponent},
    {path:'404',component:Error404Component},
    {path:'', redirectTo:'/events', pathMatch:'Full'}
]   