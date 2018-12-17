import { AddwishformComponent } from './addwishform/addwishform.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {SignupComponent} from "./user/signup/signup.component";
import {SigninComponent} from "./user/signin/signin.component";

const routes: Routes = [
<<<<<<< HEAD
  { path: '', component: HomeComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'addwish', component: AddwishformComponent }
=======
   {path: '', component: HomeComponent},
  {path: 'wishlist',component: WishlistComponent},
  {path:'addwish', component: AddwishformComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent}
>>>>>>> e59f68c937a2fe2d2feeabf85455faeb71d3466b
];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
