import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../features/user/services/auth.service';
import { rootPaths } from '../../../core/constants/root-paths';
import { Roles } from '../../../core/constants/roles';
import { Register } from '../../../features/user/dto/register';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public loaded = false;
  korisnik: Register = new Register('','','','','');

  constructor(private router:Router,
              public auth: AuthService) { }
  role=Roles.guest;
  assigned=Roles;
  ngOnInit(): void {
    this.role=this.auth.getRole();
    this.auth.getUserDetails().subscribe({
      next: res => {
        this.korisnik = res;
        this.loaded = true;
      },
      error: err => {
        console.log(err);
      }
    });
  }

  myFunction() {
    const x = document.getElementById('myTopnav');
    const navSignIn = document.getElementById('navSignIn');
    const userDropdown = document.getElementById('userDropdown');

    if (x.className === 'topnav') {
        x.className += ' responsive';
        if (navSignIn !== null) {
          navSignIn.className = '';
        }
        if (userDropdown !== null) {
          userDropdown.className = 'dropdown';
        }
    } else {
        x.className = 'topnav';
        if (navSignIn !== null) {
          navSignIn.className = 'w3-right';
        }
        if (userDropdown !== null) {
          userDropdown.className = 'dropdown w3-right';
        }
    }
  }

  checkRole(sent):boolean{
    if(sent!=this.role)return false;
    else return true;
  }

  goHome(){
    this.router.navigateByUrl("/");
  }

  goForOrders():void{
    console.log("pozvan");
    this.router.navigateByUrl(rootPaths.orders+'/'+rootPaths.oUser)
  }
  goForDelivery():void{
    this.router.navigateByUrl(rootPaths.orders+'/'+rootPaths.oDelivery);
  }

  goForEmploye():void{
    this.router.navigateByUrl(rootPaths.orders+'/'+rootPaths.oEmploye);
  }
}
