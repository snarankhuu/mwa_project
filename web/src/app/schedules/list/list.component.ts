import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Schedule } from '../types';

@Component({
  selector: 'app-list',
  template: `
  <h2>List of Schedule</h2>
  <table class="table">
    <thead>
      <tr>
        <th>Date</th>
        <th>Departure City</th>
        <th>Arrival City</th>
        <th>Avalaible Seats</th>
        <th>Car</th>
        <th>Driver</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let s of schedules$ | async">
        <td>{{s.date}}</td>
        <td>{{s.from}}</td>
        <td>{{s.to}}</td>
        <td>{{s.seat}}</td>
        <td>{{s.car.mark}} {{s.car.year}}</td>
        <td>{{s.user.name}}</td>
      </tr>
    </tbody>
  </table>
  `,
  styles: []
})
export class ListComponent implements OnInit {
  schedules: Schedule[] = [];
  constructor(private api: ApiService) { }

  async ngOnInit() {
    await this.fetchSchedules();
  }

  async fetchSchedules() {
    this.schedules = await this.api.schedules();
  }

}
