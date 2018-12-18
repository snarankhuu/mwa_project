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
  findSchedules(obj: Object): Promise<any> {
    return this.http.post('/api/schedule/list', obj).toPromise();
  }
  addSchedule(newSchedule: Schedule): Promise<any> {
    return this.http.post('/api/schedule/add', newSchedule).toPromise();
  }
  takeSeat(obj: Object): Promise<any> {
    return this.http.post('/api/schedule/takeseat', obj).toPromise();
  }

  wishes(): Promise<any> {
    return this.http.get('/api/wish/list').toPromise();
  }
  // getWish(wishId): Promise<any> {
  //   return this.http.get('/api/wish/wishId').toPromise();
  // }
  addWish(newWish: Wish): Promise<any> {
    return this.http.post('/api/wish/add', newWish).toPromise();
  }

  addCar(carInfo){
    return this.http.post('/api/user/car/add', carInfo);
  }

}
