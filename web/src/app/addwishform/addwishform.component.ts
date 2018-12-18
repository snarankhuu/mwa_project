import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "../user/auth.service";

@Component({
  selector: 'app-addwishform',
  templateUrl: './addwishform.component.html',
  styleUrls: ['./addwishform.component.css']
})
export class AddwishformComponent implements OnInit {

  private username;
  constructor(private router:Router,private api: ApiService,private auth: AuthService) { }

  async save(passanger) {
    console.log(passanger);
    try {
      await this.api.addWish(passanger);
      this.router.navigate(['/wishlist']);
    }
    catch (error) {
      console.log("error ",error.message);
    }
  }

  ngOnInit() {
    this.auth.getUserProfile().subscribe(
      res => {
        console.log(res);
        this.username = res['username'];
      },
      err => {
        console.log(err);
      }
    );
  }

}
