import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { rootPaths } from '../../core/constants/root-paths';
import { OrderArticleComponent } from './pages/order-article/order-article.component';
import { BasketComponent } from './pages/basket/basket.component';
import { RoleGuardService } from '../../core/guards/role-guard.service';
import { Roles } from '../../core/constants/roles';

const routes: Routes = [
  { path: rootPaths.home , component:HomeComponent },
  { path: rootPaths.basket, component:BasketComponent,canActivate:[RoleGuardService],data:{expectedRole:Roles.user}},
  { path: rootPaths.article+'/:id' , component:OrderArticleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
