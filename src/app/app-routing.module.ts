import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './features/home/home.module';
import { OrdersModule } from './features/orders/orders.module';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { rootPaths } from './core/constants/root-paths';
import { UserModule } from './features/user/user.module';
import { RestaurantsModule } from './features/restaurants/restaurants.module';

const routes: Routes = [
  { path: rootPaths.home, loadChildren:() =>HomeModule  },
  { path: rootPaths.orders, loadChildren:() =>OrdersModule  }, // localhost:4200/orders/ucitaj decu
  { path: rootPaths.user, loadChildren:() => UserModule}, // localhost:4200/user/login
  { path: rootPaths.restaurants, loadChildren:() => RestaurantsModule},
  { path: rootPaths.all, component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
