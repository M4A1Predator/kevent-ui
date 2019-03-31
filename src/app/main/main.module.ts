import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { EventListComponent } from './home/event-list/event-list.component';
import { EventItemComponent } from './home/event-item/event-item.component';

@NgModule({
  declarations: [HomeComponent, EventListComponent, EventItemComponent],
  imports: [
    CommonModule,
    SharedModule,
    MainRoutingModule,
  ]
})
export class MainModule { }
