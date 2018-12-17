import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addwishform',
  templateUrl: './addwishform.component.html',
  styleUrls: ['./addwishform.component.css']
})
export class AddwishformComponent implements OnInit {

  constructor() { }

  save(passanger){
    console.log(passanger);
  }

  ngOnInit() {
  }

}
