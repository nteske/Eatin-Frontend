import { Component, OnInit, OnDestroy, OnChanges, Input } from '@angular/core';
import { Roles } from '../../constants/roles';
import { Router ,ActivatedRoute} from '@angular/router';
import { rootPaths } from '../../constants/root-paths';
import { BasketService } from '../../services/basket.service';
import { AuthService } from '../../../features/user/services/auth.service';

@Component({
  selector: 'app-basket-button',
  templateUrl: './basket-button.component.html',
  styleUrls: ['./basket-button.component.css']
})
export class BasketButtonComponent implements OnInit ,OnDestroy,OnChanges{
  @Input() basket;
  role:string=Roles.guest;
  user:string=Roles.user;

  constructor(private authService:AuthService,private router:Router,
    private activatedRoute:ActivatedRoute,private basketService:BasketService) { }
  ngOnChanges(): void {

  }
  ngOnDestroy(): void {
    if(this.basket!=false)
    this.basketService.clearBasket();
  }


  ngOnInit(): void {
    this.authService.currentMessage.subscribe(message=>{
      this.role=this.authService.getRole();
    });
  }
  toBasketGo():void{
    this.router.navigateByUrl(rootPaths.orders+'/'+rootPaths.basket);
  }

}
