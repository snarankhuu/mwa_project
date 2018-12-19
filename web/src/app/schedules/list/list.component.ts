import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Schedule } from '../types';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-list',
  template: `
  <h2>List of Schedule</h2>
  <p>
      <a routerLink="/schedule/add" class="btn btn-primary">Add Schedule</a>
    </p>
  <nav class="navbar navbar-light bg-light">
  <form class="form-inline" [formGroup]='form' (ngSubmit)="onSubmit()">
    <input class="form-control mr-sm-2" formControlName="date" type="date" placeholder="Date">
    <input class="form-control mr-sm-2" formControlName="from" type="text" placeholder="Departure">
    <input class="form-control mr-sm-2" formControlName="to" type="text" placeholder="Arrival">

    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>
  <table class="table">
    <thead>
      <tr>
        <th>Date</th>
        <th>Departure City</th>
        <th>Arrival City</th>
        <th>Avalaible/All Seats</th>
        <th>Car</th>
        <th>Driver</th>
        <th>Seat</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let s of schedules">
        <td>{{s.date | date}}</td>
        <td>{{s.from}}</td>
        <td>{{s.to}}</td>
        <td><strong>{{s.seat - s.passengers.length}}</strong>/{{s.seat}}</td>
        <td>{{s.car}} </td>
        <td>{{s.user?.name}}</td>
        <td>
        <button type="button" class="btn btn-primary btn-sm" (click)="onTakeSeat(s)">Take</button>
        <button type="button" class="btn btn-danger btn-sm" (click)="onCancelSeat(s)">Cancel</button>
        </td>
      </tr>
    </tbody>
  </table>
  
  `,
  styles: []
})
export class ListComponent implements OnInit {
  schedules: Object[] = [];
  form: FormGroup;
  constructor(private api: ApiService, private fb: FormBuilder) {
    this.form = this.fb.group({
      'date': [''],
      'from': [''],
      'to': ['']
    })
  }

  async ngOnInit() {
    await this.fetchSchedules();
   

  }

   fetchSchedules() {
    this.api.schedules().subscribe(
      res => {
        console.log(res)
        this.schedules.push(res);
      },
      err => {
        console.log(err);
      }
    );
  }


  async onSubmit() {
    try {
      console.log(this.form.value)
      this.schedules = await this.api.findSchedules(this.form.value);
    } catch (error) {
      console.log(error)
    }
  }
  onTakeSeat(s) {
    if (this.api.takeSeat(s)) this.fetchSchedules();
  }
  onCancelSeat(s){
    if (this.api.cancelSeat(s)) this.fetchSchedules();
  }
}
