import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Schedule } from './schedules/types'
import { Wish } from './addwishform/types'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  schedules(): Promise<any> {
    return this.http.get('/api/schedule/list').toPromise();
  }
  addSchedule(newSchedule: Schedule): Promise<any> {
    return this.http.post('/api/schedule/add', newSchedule).toPromise();
  }

  wishes(): Promise<any> {
    return this.http.get('/api/wish/list').toPromise();
  }
  addWish(newWish: Wish): Promise<any> {
    return this.http.post('/api/wish/add', newWish).toPromise();
  }
}