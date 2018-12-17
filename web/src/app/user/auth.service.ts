import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient) { }

  logup(credentials)
  {
    return this.http.post('api/user/signup',credentials);
  }

  login(credentials)
  {
    return this.http.post('api/user/signin',credentials);
  }

  validate(email)
  {
    return this.http.post('api/user/validateEmail',{email: email});
  }
}
