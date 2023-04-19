import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  constructor(private http: HttpClient) { }
  url: string = 'http://localhost:4000/fetchRestaurantList';
  fetchRestaurantList():Observable<any>{
    return this.http.get<any[]>(this.url)

  }
  MenuListurl: string = 'http://localhost:4000/fetchRestaurantMenu/';
  fetchRestaurantMenuList(id):Observable<any>{
    return this.http.get<any[]>(this.MenuListurl+id)

  }
  
}
