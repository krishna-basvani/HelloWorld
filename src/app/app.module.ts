import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { EventsAppComponent } from './events-app.component';
import { EventListComponent } from "./events/event-list.component";
import { EventThumbnailComponent } from "./events/event-thumbnail.component";
import {NavBarComponent} from "./nav/navbar.component"
import {EventService} from "./shared/event.service"

@NgModule({
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EventService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
