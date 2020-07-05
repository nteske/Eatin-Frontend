import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasketComponent } from './pages/basket/basket.component';
import { RoleGuard } from '../../core/guards/role.guard';
import { Roles } from '../../core/constants/roles';
import { rootPaths } from '../../core/constants/root-paths';
import { UserOrdersComponent } from './pages/user-orders/user-orders.component';
import { DeliveryOrdersComponent } from './pages/delivery-orders/delivery-orders.component';
import { EmployeOrdersComponent } from './pages/employe-orders/employe-orders.component';

const routes: Routes = [
  { path: rootPaths.basket, component:BasketComponent,canActivate:[RoleGuard],data:{expectedRole:Roles.user}},
  { path: rootPaths.oUser, component:UserOrdersComponent,canActivate:[RoleGuard],data:{expectedRole:Roles.user}},
  { path: rootPaths.oDelivery, component:DeliveryOrdersComponent,canActivate:[RoleGuard],data:{expectedRole:Roles.delivery}},
  { path: rootPaths.oEmploye, component:EmployeOrdersComponent,canActivate:[RoleGuard],data:{expectedRole:Roles.employee}},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
