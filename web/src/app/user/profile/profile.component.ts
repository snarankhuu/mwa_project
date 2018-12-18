import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";
import {TokenService} from "../../services/token.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {
  public userDetails;

  constructor(private auth: AuthService, private router: Router, private token: TokenService) {
  }

  ngOnInit() {

    this.auth.getUserProfile().subscribe(
      res => {
        this.userDetails = res;
      },
      err => {
        console.log(err);

      }
    );
  }

  onLogout() {
    this.auth.logOut();
  }
}
