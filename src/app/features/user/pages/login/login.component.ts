import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Login } from '../../dto/login';
import { Storage } from '../../../../core/constants/storage';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  @Output() dogadjaj = new EventEmitter();

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required,Validators.minLength(6)]),
      password: new FormControl(null, [Validators.required,Validators.minLength(7)]),
    });
  }
  onSubmit(): void
  {
    this.authService.loginKorisnik(new Login(this.form.value.email,this.form.value.password))
    .subscribe(data=>{
      localStorage.setItem(Storage.token,'Bearer '+data['jwt']);
      this.router.navigateByUrl('/');
      window.location.reload();
      this.dogadjaj.emit();
      this.authService.changeMessage();
    });
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

}
