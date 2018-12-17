import { ApiService } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  passengers$;
  constructor(private api:ApiService) { 
    this.passengers$=api.wishes();
  }

  
  ngOnInit() {
  }

}
