import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { rootPaths } from 'src/app/core/constants/root-paths';
import { RestaurantViewComponent } from './pages/restaurant-view/restaurant-view.component';
import { RoleGuard } from 'src/app/core/guards/role.guard';
import { Roles } from 'src/app/core/constants/roles';
import { ArticlesEditComponent } from './pages/articles-edit/articles-edit.component';


const routes: Routes = [
  { path: rootPaths.restaurantsView, component:RestaurantViewComponent,canActivate:[RoleGuard],data:{expectedRole:Roles.employee}},
  { path: rootPaths.articlesView, component:ArticlesEditComponent,canActivate:[RoleGuard],data:{expectedRole:Roles.employee}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantsRoutingModule { }
