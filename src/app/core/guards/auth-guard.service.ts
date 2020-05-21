import { Injectable } from '@angular/core';
import { Router,CanActivate } from '@angular/router';
import { AuthService } from '../../features/home/services/auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

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
