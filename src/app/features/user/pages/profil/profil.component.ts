import { Component, OnInit } from '@angular/core';
import { Korisnik } from '../../models/korisnik.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {


  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    console.log(this.auth.getUserDetails());
  }

  onSubmit(): void
  {
  }

  showHidePwd() {
    const input = (document.getElementById('myPwdInput') as HTMLInputElement);
    const icon = (document.getElementById('myPwdIcon'));

    if (input.type === 'password') {
      input.type = 'text';
      icon.className = 'fa fa-eye-slash';
    } else {
      input.type = 'password';
      icon.className = 'fa fa-eye';
    }
  }

  showHidePwdNew() {
    const input = (document.getElementById('myPwdInputNew') as HTMLInputElement);
    const icon = (document.getElementById('myPwdIconNew'));

    if (input.type === 'password') {
      input.type = 'text';
      icon.className = 'fa fa-eye-slash';
    } else {
      input.type = 'password';
      icon.className = 'fa fa-eye';
    }
  }

}
