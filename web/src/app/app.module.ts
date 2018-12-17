import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import {SignupComponent} from './user/signup/signup.component';
import {WishlistComponent} from './wishlist/wishlist.component';
import {AddwishformComponent} from './addwishform/addwishform.component';
import {HomeComponent} from './home/home.component';
import {BsNavbarComponent} from './bs-navbar/bs-navbar.component';
import {SigninComponent} from './user/signin/signin.component';
import {AuthService} from "./user/auth.service";
import {TokenService} from "./services/token.service";
import {AuthInterceptor} from "./interceptor/auth-interceptor";

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
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService, TokenService,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
