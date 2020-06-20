import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Roles } from '../../../../core/constants/roles';
import { Router } from '@angular/router';
import { rootPaths } from '../../../../core/constants/root-paths';

@Component({
  selector: 'app-user-interface',
  templateUrl: './user-interface.component.html',
  styleUrls: ['./user-interface.component.css']
})
export class UserInterfaceComponent implements OnInit {
  @Output() dogadjaj = new EventEmitter();
  constructor(private authService:AuthService,private router:Router) { }
  role=Roles.guest;
  assigned=Roles;
  ngOnInit(): void {
    this.role=this.authService.getRole();
  }
  checkRole(sent):boolean{
    if(sent!=this.role)return false;
    else return true;
  }
  logOut(): void{
    this.authService.logOut();
    this.authService.changeMessage();
    this.dogadjaj.emit();
  }

  goForOrders():void{
    this.router.navigateByUrl(rootPaths.orders+'/'+rootPaths.oUser)
  }

  goForDelivery():void{
    this.router.navigateByUrl(rootPaths.orders+'/'+rootPaths.oDelivery);
  }
}
