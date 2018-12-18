import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";
import {TokenService} from "../../services/token.service";
import * as decode from 'jwt-decode';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {
  public userDetails;
  constructor(private auth: AuthService, private router: Router,private token : TokenService) { }

  ngOnInit() {

    let decoded = decode(this.token.getToken());
    let email = decoded.sub;

    this.auth.getUserProfile(email).subscribe(
      res => {
        this.userDetails = res;
      },
      err => {
        console.log(err);

      }
    );
  }

  onLogout(){
    this.token.deleteToken();
    this.router.navigate(['/signin']);
  }
}
