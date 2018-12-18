import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addwishform',
  templateUrl: './addwishform.component.html',
  styleUrls: ['./addwishform.component.css']
})
export class AddwishformComponent implements OnInit {

  constructor(private router:Router,private api: ApiService) { }

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
  }

}
