import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../features/user/services/auth.service';
import { rootPaths } from '../../../core/constants/root-paths';
import { Roles } from '../../../core/constants/roles';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,
              public auth: AuthService) { }
  role=Roles.guest;
  assigned=Roles;
  ngOnInit(): void {
    this.role=this.auth.getRole();
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
