import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello.component'

import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component'

import { AuthComponent } from './auth/auth.component'
import { AuthGuardService } from './auth/auth-guard.service'
import { AuthEffects } from './auth/auth.effects'

import { StoreModule, MetaReducer } from '@ngrx/store';
import { appReducer } from './app.reducer';
import { debug } from './app.meta-reducer'

import { LoginFormComponent } from './auth/login-form/login-form.component'
import { EffectsModule } from '@ngrx/effects';

import { loadData } from './local-storage/storage';
import { SharedModule } from './shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

export const metaReducers: MetaReducer<any>[] = [debug];

const initialState = loadData();

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    HelloComponent,
    AuthComponent,
    LoginFormComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducer, { initialState, metaReducers }),
    HttpClientModule,
    NgbModule,
    FormsModule,
    EffectsModule.forRoot([AuthEffects]),
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule { }
