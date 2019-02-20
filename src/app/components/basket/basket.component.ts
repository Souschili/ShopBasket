import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { BasketService } from 'src/app/services/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  public itemsList:Array<Item>

  constructor(private basketrepo:BasketService) {
    this.itemsList=basketrepo.getAll();
  }

 public Add(pname:string):void
 {
   this.basketrepo.Additem(pname);
   this.itemsList=this.basketrepo.getAll();
 }

   UpCount(pname:string):void{
   this.basketrepo.UpCount(pname);
   this.itemsList=this.basketrepo.getAll();
 }

 DownCount(pname:string):void{
  this.basketrepo.Downcount(pname);
  this.itemsList=this.basketrepo.getAll();
 }

 public test()
 {
   alert('click click!!');
 }
  ngOnInit() {}

}
