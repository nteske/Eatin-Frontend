import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasketComponent } from './pages/basket/basket.component';
import { RoleGuardService } from '../../core/guards/role-guard.service';
import { Roles } from '../../core/constants/roles';
import { rootPaths } from '../../core/constants/root-paths';
import { UserOrdersComponent } from './pages/user-orders/user-orders.component';
import { DeliveryOrdersComponent } from './pages/delivery-orders/delivery-orders.component';

const routes: Routes = [
  { path: rootPaths.basket, component:BasketComponent,canActivate:[RoleGuardService],data:{expectedRole:Roles.user}},
  { path: rootPaths.oUser, component:UserOrdersComponent,canActivate:[RoleGuardService],data:{expectedRole:Roles.user}},
  { path: rootPaths.oDelivery, component:DeliveryOrdersComponent,canActivate:[RoleGuardService],data:{expectedRole:Roles.delivery}},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
