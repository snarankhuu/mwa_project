import { AddwishformComponent } from './addwishform/addwishform.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {SignupComponent} from "./user/signup/signup.component";
import {SigninComponent} from "./user/signin/signin.component";
import {ProfileComponent} from "./user/profile/profile.component";
import {AuthGuard} from "./guard/auth.guard";

const routes: Routes = [
   {path: '', component: HomeComponent},
  {path: 'wishlist',component: WishlistComponent, canActivate:[AuthGuard]},
  {path:'addwish', component: AddwishformComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'profile',component: ProfileComponent, canActivate:[AuthGuard]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
