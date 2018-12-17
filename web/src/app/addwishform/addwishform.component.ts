import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addwishform',
  templateUrl: './addwishform.component.html',
  styleUrls: ['./addwishform.component.css']
})
export class AddwishformComponent implements OnInit {

  constructor(private api: ApiService) { }

  async save(passanger) {
    console.log(passanger);
    try {
      await this.api.addWish(passanger);
    }
    catch (error) {
      console.log(error)
    }

  }

  ngOnInit() {
  }

}
