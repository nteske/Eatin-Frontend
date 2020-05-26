import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../features/home/services/auth.service';
import { Roles } from '../../constants/roles';

@Component({
  selector: 'app-basket-button',
  templateUrl: './basket-button.component.html',
  styleUrls: ['./basket-button.component.css']
})
export class BasketButtonComponent implements OnInit {
  role:string=Roles.guest;
  user:string=Roles.user;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.currentMessage.subscribe(message=>{
      this.role=this.authService.getRole();
    });
  }

}
