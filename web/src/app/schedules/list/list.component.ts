import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Schedule } from '../types';

@Component({
  selector: 'app-list',
  template: `
    <p>
      list works!
    </p>
    <div *ngFor="let schedule of schedules"> {{schedule._id}}  {{schedule.status}} </div>
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
