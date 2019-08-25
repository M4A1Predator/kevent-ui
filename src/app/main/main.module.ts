import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { EventListComponent } from './home/event-list/event-list.component';
import { EventItemComponent } from './home/event-item/event-item.component';
import { EventPageComponent } from './event/event-page/event-page.component';
import { EventListPageComponent } from './event/event-list-page/event-list-page.component';
import { UpcompingComponent } from './home/upcomping/upcomping.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [HomeComponent, EventListComponent, EventItemComponent, EventPageComponent, EventListPageComponent, UpcompingComponent],
  imports: [
    CommonModule,
    SharedModule,
    MainRoutingModule,
    // FontAwesomeModule
  ]
})
export class MainModule { }
