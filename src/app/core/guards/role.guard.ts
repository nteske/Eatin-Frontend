import { Injectable } from '@angular/core';
import { Router,CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../features/user/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private authService:AuthService,private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot):boolean{
      const roleExpected = route.data.expectedRole;
      const roleHave = this.authService.getRole();
      if(roleExpected!=roleHave){this.router.navigateByUrl("/");return false;}
    return true;
  }

}
