import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {DataTableModule} from 'angular5-data-table';

import {SchedulesModule} from './schedules/schedules.module'
import {SignupComponent} from './user/signup/signup.component';
import {WishlistComponent} from './wishlist/wishlist.component';
import {AddwishformComponent} from './addwishform/addwishform.component';
import {HomeComponent} from './home/home.component';
import {BsNavbarComponent} from './bs-navbar/bs-navbar.component';
import {SigninComponent} from './user/signin/signin.component';
import {AuthService} from "./user/auth.service";
import {TokenService} from "./services/token.service";
import {AuthInterceptor} from "./interceptor/auth-interceptor";
import {AuthGuard} from "./guard/auth.guard";
import {ProfileComponent} from './user/profile/profile.component';
import { NgReduxModule, NgRedux } from '@angular-redux/store';


import { INITIAL_STATE, rootReducer, AppState } from './user/store';

@NgModule({
  declarations: [
    SignupComponent,
    AppComponent,
    WishlistComponent,
    AddwishformComponent,
    HomeComponent,
    BsNavbarComponent,
    SigninComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgReduxModule,
    DataTableModule.forRoot(),
    SchedulesModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService, TokenService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<AppState>, auth: AuthService) {
    ngRedux.configureStore(
      rootReducer,
      INITIAL_STATE,
      null
    )
    if (auth.isLoggedIn()) auth.getUser();
  }
}
