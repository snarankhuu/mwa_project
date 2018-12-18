import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() {
  }

  saveToken(token) {
    localStorage.setItem('id_token', token);
    console.log('saved');
  }

  getToken() {
    return localStorage.getItem('id_token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }

  getUserPayload() {
    let token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    } else
      return null;
  }
}

