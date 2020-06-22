import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../features/user/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,
              public auth: AuthService) { }

  ngOnInit(): void {
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

  goHome(){
    this.router.navigateByUrl("/");
  }

}
