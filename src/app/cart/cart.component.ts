import { Component } from '@angular/core';
import { ICart } from '../service/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  totalAmount:number=0;
  totalAmountPayable:number=0;
  totaltax=0;
  cartlist:ICart[]=[];
  constructor (){
   
    this.cartlist=JSON.parse(localStorage.getItem('cartitems'));
    this.cartlist.map(item=>{

      console.log(item.price)
      console.log(item.quantity)
      this.totalAmount=this.totalAmount+( item.price*item.quantity)
    })
   
  }

  getTotal() {
    return this.totalAmount
  }
   getTotalAmount() {
    return (this.totalAmount+this.totaltax)
  }
  getTaxAmount() {
    this.totaltax=this.totalAmount*0.13
    return this.totaltax
  }
  handleDelete(id: string) {
     this.cartlist = this.cartlist.filter((g) => g.id  !== id);
     //console.log("@hanlde delete ",this.cartlist)
  }

  handleQuantityChange(id: string, data: number) {
    this.cartlist = this.cartlist.map((g) =>
      g.id  == id
        ? {
            ...g,
            quantity:
              data > 0
                ? g.quantity + data
                : g.quantity > 0
                ? g.quantity + data
                : 0,
          }
        : g
    );
    this.totalAmount=0;
    this.cartlist.map(item=>{

      console.log(item.price)
      console.log(item.quantity)
      this.totalAmount=this.totalAmount+( item.price*item.quantity)
    })
  }
}
