import { Wish } from './../addwishform/types';
import { ApiService } from './../api.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataTableResource } from 'angular5-data-table';

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
  tableResource: DataTableResource<Wish>;

  items: Wish[]=[];
  itemCount:number;

 
  constructor(private api:ApiService) { 
    //this.wishes$=api.wishes();
    this.promise=this.api.wishes().then(wishes=>{
     this.filteredWishs= this.wishes=wishes;

     this.initalizeTable(wishes);
     
    });
  }

  private initalizeTable(wishes: Wish[]){
    this.tableResource=new DataTableResource(wishes);
      this.tableResource.query({offset:0})
      .then(items=> this.items=items)

      this.tableResource.count()
      .then(count=>this.itemCount=count);

  }

  reloadItems(params){
    if(!this.tableResource) return;
    this.tableResource.query(params)
    .then(items=> this.items=items)
  }


  filter(query:string){
   // console.log(query);
    this.filteredWishs=(query)?
    this.wishes.filter(p=>p.dcity.toLocaleLowerCase().includes(query.toLocaleLowerCase())):
    this.wishes;

    this.initalizeTable(this.filteredWishs);
  }
  ngOnDestroy(){
    //this.promise.finally();
  }
  
  ngOnInit() {
  }

}
