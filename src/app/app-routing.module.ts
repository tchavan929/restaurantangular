import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { RestaurantlistComponent } from './restaurantlist/restaurantlist.component';
import { AboutComponent } from './about/about.component';
import { RestaurantMenulistComponent } from './restaurant-menulist/restaurant-menulist.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'home', component: HomeComponent },
  { path: 'restaurantlist', component: RestaurantlistComponent },
  { path: 'about', component: AboutComponent },
  { path: 'restaurantMenulist/:id', component: RestaurantMenulistComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
