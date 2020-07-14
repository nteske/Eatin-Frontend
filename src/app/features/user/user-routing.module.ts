import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { rootPaths } from '../../core/constants/root-paths';
import { RegisterComponent } from './pages/register/register.component';
import { NoGuard } from '../../core/guards/no.guard';
import { ProfilComponent } from './pages/profil/profil.component';
import { AuthGuard } from '../../core/guards/auth.guard';
import { UsersComponent } from './pages/users/users.component';
import { RoleGuard } from '../../core/guards/role.guard';
import { Roles } from '../../core/constants/roles';
import { RestaurantAdminComponent } from './pages/restaurant-admin/restaurant-admin.component';
import { TipoviRestoranaComponent } from './pages/tipovi-restorana/tipovi-restorana.component';
import { TipoviArtiklaComponent } from './pages/tipovi-artikla/tipovi-artikla.component';


const routes: Routes = [
  {path: rootPaths.login, component: LoginComponent, canActivate:[NoGuard]},
  {path: rootPaths.register, component: RegisterComponent, canActivate:[NoGuard]},
  {path: rootPaths.profil, component: ProfilComponent, canActivate:[AuthGuard]},
  {path: rootPaths.users, component: UsersComponent, canActivate:[RoleGuard],data:{expectedRole:Roles.admin}},
  {path: rootPaths.restaurantAdmin, component: RestaurantAdminComponent, canActivate:[RoleGuard],data:{expectedRole:Roles.admin}},
  {path: rootPaths.tipRestorana, component: TipoviRestoranaComponent, canActivate:[RoleGuard],data:{expectedRole:Roles.admin}},
  {path: rootPaths.tipArtikla, component: TipoviArtiklaComponent, canActivate:[RoleGuard],data:{expectedRole:Roles.admin}}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
