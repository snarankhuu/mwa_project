import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './user/signup/signup.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AddwishformComponent } from './addwishform/addwishform.component';
import { HomeComponent } from './home/home.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    SignupComponent,
    AppComponent,
    WishlistComponent,
    AddwishformComponent,
    HomeComponent,
    BsNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
