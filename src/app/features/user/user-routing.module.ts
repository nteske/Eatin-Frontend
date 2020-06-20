import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { rootPaths } from '../../core/constants/root-paths';
import { RegisterComponent } from './pages/register/register.component';


const routes: Routes = [
  {path: rootPaths.login, component: LoginComponent},
  {path: rootPaths.register, component: RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
