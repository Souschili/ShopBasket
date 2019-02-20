import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  private productList:Array<Item>;


  constructor() { 
    this.productList=[
      new Item('Водка'), new Item('Масло'), new Item('Сыр')
    ]
  }

  public getAll():Array<Item>
  {
    return this.productList;
  }

  Additem(name:string):void{
    
  if(name.trim().length!==0){
    //поиск сначала,несчем сравнивать же!!! измени переменую смотри где будет дубликат
    let duplicate=this.productList.find(x=> x.productName===name);
    //Фарид скунду надо проверить переменую duplicate если она не пустая то + к значению,если пустая добавляем запись
    if(duplicate!==undefined)
    {
     //если нашли то +1 к значению
      duplicate.productCount++;
    }
    else
    {
      //число выдается автоматом если ты забыл смотри модель конструктор )
      //если ненашли то добавляем в корзину
       let custom=new Item(name);
       this.productList.push(custom);
    }
    
  }
  }

  public UpCount(name:string):void
  {
    let item=this.productList.find(x=> x.productName===name);
    item.productCount++;
  }

  public Downcount(name:string):void
  {
    let item=this.productList.find(x=> x.productName===name);

    //если количество равно 1 то просто удаляем его из списка
    if(item.productCount===1){
      
      this.productList=this.productList.filter(x=> x.productName!==item.productName);
    }
    else
    {
      item.productCount--;
    }
  }



}
