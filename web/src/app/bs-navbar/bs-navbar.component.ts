import { Component, OnInit } from '@angular/core';
import {AuthService} from "../user/auth.service";

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  isLoggedIn()
  {
    return this.auth.isLoggedIn();
  }

  onLogout()
  {
    this.auth.logOut();
  }

}
