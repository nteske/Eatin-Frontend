import { Injectable } from '@angular/core';
import { Router,CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../features/home/services/auth.service'
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService:AuthService,private router: Router) { }

  canActivate():boolean{
      if(!this.authService.isLoggedIn())
      {
        this.router.navigateByUrl('/');
        return false;
      }
    return true;
  }
  
}
