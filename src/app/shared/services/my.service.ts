import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  myProducts = [
    {productId:'P101', productName: 'Mobile', productPrice: 25000},
    {productId:'P102', productName: 'Laptop', productPrice: 35000},
    {productId:'P103', productName: 'Ipad', productPrice: 24000},
    {productId:'P104', productName: 'Printer', productPrice: 8000}
    

  ]

  constructor() { }

  getProducts(){
    return this.myProducts
  }
}
