import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../service/restaurant.service';

@Component({
  selector: 'app-restaurantlist',
  templateUrl: './restaurantlist.component.html',
  styleUrls: ['./restaurantlist.component.css']
})
export class RestaurantlistComponent implements OnInit {
  list: any[] = [];
  imagebasePath = 'assets/';
  imageextension = '.png';
  constructor(private restaurantService: RestaurantService) {}
  ngOnInit(): void {
    this.restaurantService.fetchRestaurantList().subscribe((data)=>{
      console.log(data)
      this.list=data;

    }

    )
  }
}
