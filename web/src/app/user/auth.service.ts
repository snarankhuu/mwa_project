import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TokenService} from "../services/token.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private token: TokenService) {
  }

  logup(credentials) {
    return this.http.post('api/user/signup', credentials);
  }

  login(credentials) {
    return this.http.post('api/user/signin', credentials);
  }

  validate(email) {
    return this.http.post('api/user/validateEmail', {email: email});
  }

  isLoggedIn() {
    let userPayload = this.token.getUserPayload();
    console.log(userPayload);
    if (userPayload)
      return userPayload.exp > Date.now() / 1000;
    else
      return false;
  }
}
