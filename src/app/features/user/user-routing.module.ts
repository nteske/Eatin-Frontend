import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { rootPaths } from '../../core/constants/root-paths';
import { RegisterComponent } from './pages/register/register.component';
import { NoGuard } from '../../core/guards/no.guard';
import { ProfilComponent } from './pages/profil/profil.component';
import { AuthGuard } from '../../core/guards/auth.guard';
import { UsersComponent } from './pages/users/users.component';


const routes: Routes = [
  {path: rootPaths.login, component: LoginComponent, canActivate:[NoGuard]},
  {path: rootPaths.register, component: RegisterComponent, canActivate:[NoGuard]},
  {path: rootPaths.profil, component: ProfilComponent, canActivate:[AuthGuard]},
  {path: rootPaths.users, component: UsersComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
