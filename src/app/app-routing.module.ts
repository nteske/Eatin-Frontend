import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './features/home/home.module';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { rootPaths } from './core/constants/root-paths';

const routes: Routes = [
  { path: rootPaths.home, loadChildren:() =>HomeModule  },
  { path: rootPaths.all, component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
