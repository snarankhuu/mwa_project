import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";
import {TokenService} from "../../services/token.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {
  public userDetails;

  constructor(private auth: AuthService, private router: Router, private token: TokenService, private http: HttpClient) {
  }

  ngOnInit() {

    this.auth.getUserProfile().subscribe(
      res => {
        this.userDetails = res
      },
      err => {
        console.log(err);
      }
    );
  }
}
