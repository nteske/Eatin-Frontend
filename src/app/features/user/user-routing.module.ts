import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { rootPaths } from '../../core/constants/root-paths';
import { RegisterComponent } from './pages/register/register.component';
import { NoGuard } from '../../core/guards/no.guard';


const routes: Routes = [
  {path: rootPaths.login, component: LoginComponent, canActivate:[NoGuard]},
  {path: rootPaths.register, component: RegisterComponent, canActivate:[NoGuard]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
