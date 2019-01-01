import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from './auth/auth-guard.service'

import { HelloComponent } from './components/hello.component'
import { HomeComponent } from './home/home.component'
import { AuthComponent } from './auth/auth.component'

import { EventPageComponent } from './events/event-page/event-page.component'

const routes: Routes = [
  // { path: '', component: HomeComponent, pathMatch: 'full', canActivate: [AuthGuardService] },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: AuthComponent, pathMatch: 'full' },
  { path: 'hello', component: HelloComponent, pathMatch: 'full' },

  { path: 'events/:id', component: EventPageComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
