import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../service/restaurant.service';
import { ICart,CartService } from '../service/cart.service';

@Component({
  selector: 'app-restaurant-menulist',
  templateUrl: './restaurant-menulist.component.html',
  styleUrls: ['./restaurant-menulist.component.css']
})
export class RestaurantMenulistComponent implements OnInit {
 
  list: any[] = [];
  constructor(private restaurantService: RestaurantService,private cartService: CartService,private route: ActivatedRoute) { }
  ngOnInit(): void {
   //console.log("@check id here ",)
   this.restaurantService.fetchRestaurantMenuList(this.route.snapshot.params['id']).subscribe((data)=>{
    console.log(data)
    this.list=data;
  });

  }
  addToCart(menu_id:string,name:string,price:number){
    // ICart obj={
    //   menu_id:menu_id,
    //   name:name,
    //   price:price
    // }
    console.log("adding to kart method")
    const obj:ICart={
      id:menu_id,
      name:name,
      price:price,
      quantity:1
    }
    console.log("@obj",obj)
    this.cartService.addToCart(obj);
    console.log("@get cartlist",this.cartService.getcart)
    
  }
}
