import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasketComponent } from './pages/basket/basket.component';
import { RoleGuardService } from '../../core/guards/role-guard.service';
import { Roles } from '../../core/constants/roles';
import { rootPaths } from '../../core/constants/root-paths';

const routes: Routes = [
  { path: rootPaths.basket, component:BasketComponent,canActivate:[RoleGuardService],data:{expectedRole:Roles.user}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
