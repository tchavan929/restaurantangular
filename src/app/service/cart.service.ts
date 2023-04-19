import { Injectable } from '@angular/core';
export interface ICart {
  name: string;
  quantity: number;
  id: string;
  price:number
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartlist:ICart[]=[];

  constructor() { }
  getcart() {
    return this.cartlist;
  }
  addToCart(cart: ICart){
    console.log("@cart in  cartservice",cart)
    this.cartlist.push(cart);
    console.log(this.cartlist)
    localStorage.setItem('cartitems', JSON.stringify(this.cartlist));
    console.log("@getting from localstoreage",localStorage.getItem('cartitems'))
    
  }
}
