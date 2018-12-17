import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { SchedulesModule } from './schedules/schedules.module'
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SignupComponent} from './user/signup/signup.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {WishlistComponent} from './wishlist/wishlist.component';
import {AddwishformComponent} from './addwishform/addwishform.component';
import {HomeComponent} from './home/home.component';
import {BsNavbarComponent} from './bs-navbar/bs-navbar.component';
import {HttpClientModule} from "@angular/common/http";
import {AuthService} from "./user/auth.service";
import {SigninComponent} from './user/signin/signin.component';
import {TokenService} from "./services/token.service";

@NgModule({
  declarations: [
    SignupComponent,
    AppComponent,
    WishlistComponent,
    AddwishformComponent,
    HomeComponent,
    BsNavbarComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    SchedulesModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService, TokenService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
