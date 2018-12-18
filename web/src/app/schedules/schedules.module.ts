import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from "../guard/auth.guard";

const scheduleRoutes: Routes = [
  {
    path: 'schedule',
    component: ListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'schedule/add',
    component: AddComponent,
    canActivate: [AuthGuard]
  }
]

@NgModule({
  declarations: [ListComponent, AddComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(scheduleRoutes)
  ]
})
export class SchedulesModule { }
