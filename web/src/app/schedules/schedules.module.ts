import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const scheduleRoutes: Routes = [
  {
    path: 'schedule',
    component: ListComponent,
  },
  {
    path: 'schedule/add',
    component: AddComponent,
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
