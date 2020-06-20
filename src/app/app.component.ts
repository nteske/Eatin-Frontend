import { Component } from '@angular/core';
import { filter } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';
import { rootPaths } from './core/constants/root-paths';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  showBasket = true;
  showHeader= true;
  constructor(
    private router: Router
) {
    this.router.events.pipe(
        filter(e => e instanceof NavigationEnd)
    ).subscribe(event => this.modifyHeader(event));
}

ngOnInit() {
}

modifyHeader(location) {
    if (location.url === '/'+rootPaths.orders+'/'+rootPaths.basket) {
        this.showBasket = false;
      //  this.showHeader=true;
    }else if(location.url==="/"){
      this.showBasket = true;
     // this.showHeader=false;
    } 
    else {
        //this.showHeader=true;
        this.showBasket = true;
    }
}
}
