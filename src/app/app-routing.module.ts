import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from './auth/auth-guard.service'

import { HelloComponent } from './components/hello.component'
import { AuthComponent } from './auth/auth.component'

const routes: Routes = [
  // { path: '', component: HomeComponent, pathMatch: 'full', canActivate: [AuthGuardService] },
  { 
    path: '',
    loadChildren: './main/main.module#MainModule'
  },
  { path: 'login', component: AuthComponent, pathMatch: 'full' },
  { path: 'hello', component: HelloComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
