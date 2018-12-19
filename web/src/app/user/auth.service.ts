import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { TokenService } from "../services/token.service";
import { Router } from "@angular/router";
import * as decode from 'jwt-decode';
import { UserService } from './user.service'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private token: TokenService, private router: Router, private user: UserService) {
  }

  logup(credentials) {
    return this.http.post('/api/user/signup', credentials);
  }

  login(credentials) {
    return this.http.post('/api/user/signin', credentials);
  }

  logOut() {
    this.user.setUser(null)
    this.token.deleteToken();
    this.router.navigate(['/signin']);
  }

  validate(email) {
    return this.http.post('/api/user/validateEmail', { email: email });
  }

  isLoggedIn() {
    let userPayload = this.token.getUserPayload();
    if (userPayload)
      return userPayload.exp > Date.now() / 1000;
    else
      return false;
  }

  async getUser() {
    let decoded = decode(this.token.getToken());
    let email = decoded.sub;
    const user = await this.http.get('/api/user/profile?email=' + email).toPromise();
    this.user.setUser(user);
    return user
  }
  
  getUserProfile() {
    let decoded = decode(this.token.getToken());
    let email = decoded.sub;
    console.log(email);
    return this.http.get('/api/user/profile?email=' + email);
  }



}
