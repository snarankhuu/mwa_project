import { AddwishformComponent } from './addwishform/addwishform.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'addwish', component: AddwishformComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
