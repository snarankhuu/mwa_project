import { ApiService } from './../api.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit, OnDestroy {
 // wishes$;
  wishes :{dcity:string}[];
  filteredWishs: any[];
  promise:Promise<any>;

 
  constructor(private api:ApiService) { 
    //this.wishes$=api.wishes();
    this.promise=this.api.wishes().then(wishes=>{
     this.filteredWishs= this.wishes=wishes;
    });
  }

  filter(query:string){
   // console.log(query);
    this.filteredWishs=(query)?
    this.wishes.filter(p=>p.dcity.toLocaleLowerCase().includes(query.toLocaleLowerCase())):
    this.wishes;
  }
  ngOnDestroy(){
    //this.promise.finally();
  }
  
  ngOnInit() {
  }

}
