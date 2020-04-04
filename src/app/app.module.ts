import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { EventsAppComponent } from './events-app.component';
import { EventListComponent } from "./events/event-list.component";
import { EventDetailsComponent} from "./events/event-details/event-details.component"
import { EventThumbnailComponent } from "./events/event-thumbnail.component";
import {NavBarComponent} from "./nav/navbar.component"
import {EventService} from "./shared/event.service"
import {Error404Component} from "./error/404.component"
import {ToastrService} from "./common/toastr.service"
import { appRoutes } from "./routes";
import { from } from 'rxjs';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    Error404Component,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EventService,ToastrService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
