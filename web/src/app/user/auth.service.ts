import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TokenService} from "../services/token.service";
import {Router} from "@angular/router";
import * as decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private token: TokenService, private router: Router) {
  }

  logup(credentials) {
    return this.http.post('http://localhost:8000/api/user/signup', credentials);
  }

  login(credentials) {
    return this.http.post('http://localhost:8000/api/user/signin', credentials);
  }

  logOut()
  {
    this.token.deleteToken();
    this.router.navigate(['/signin']);
  }

  validate(email) {
    return this.http.post('http://localhost:8000/api/user/validateEmail', {email: email});
  }

  isLoggedIn() {
    let userPayload = this.token.getUserPayload();
    if (userPayload)
      return userPayload.exp > Date.now() / 1000;
    else
      return false;
  }

  getUserProfile() {
    let decoded = decode(this.token.getToken());
    let email = decoded.sub;
    console.log(email);
    return this.http.get('http://localhost:8000/api/user/profile?email=' + email);
  }



}
