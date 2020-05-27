import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './features/home/home.module';
import { OrdersModule } from './features/orders/orders.module';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { rootPaths } from './core/constants/root-paths';

const routes: Routes = [
  { path: rootPaths.home, loadChildren:() =>HomeModule  },
  { path: rootPaths.orders, loadChildren:() =>OrdersModule  },
  { path: rootPaths.all, component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
