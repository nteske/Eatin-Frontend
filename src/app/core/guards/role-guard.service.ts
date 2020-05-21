import { Injectable } from '@angular/core';
import { Router,CanActivate,ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../../features/home/services/auth.service'
import { Roles } from '../constants/roles';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService {

  constructor(private authService:AuthService,private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot):boolean{
      const roleExpected = route.data.expectedRole;
      const roleHave = this.authService.getRole();
      if(roleExpected!=roleHave)return false;
    return true;
  }
}
