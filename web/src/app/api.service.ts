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
    try {
      return this.http.get('/api/schedule/list').toPromise();
    } catch (error) {
      console.log(error)
    }
  }
  findSchedules(obj: Object): Promise<any> {
    try {
      return this.http.post('/api/schedule/list', obj).toPromise();
    } catch (error) {
      console.log(error)
    }
  }
  addSchedule(newSchedule: Schedule): Promise<any> {
    try {
      return this.http.post('/api/schedule/add', newSchedule).toPromise();
    } catch (error) {
      console.log(error)
    }
  }
  takeSeat(obj: Object): Promise<any> {
    try {
      return this.http.post('/api/schedule/takeseat', obj).toPromise();
    } catch (error) {
      console.log(error)
    }
  }
  cancelSeat(obj: Object): Promise<any> {
    try {
      return this.http.post('/api/schedule/cancelseat', obj).toPromise();
    } catch (error) {
      console.log(error)
    }
  }

  wishes(): Promise<any> {
    try {
      return this.http.get('/api/wish/list').toPromise();
    } catch (error) {
      console.log(error)
    }
  }
  // getWish(wishId): Promise<any> {
  //   return this.http.get('/api/wish/wishId').toPromise();
  // }
  addWish(newWish: Wish): Promise<any> {
    try {
      return this.http.post('/api/wish/add', newWish).toPromise();
    } catch (error) {
      console.log(error)
    }
  }
  addCar(carInfo) {
    try {
      return this.http.post('/api/user/car/add', carInfo);
    } catch (error) {
      console.log(error)
    }
  }

}
