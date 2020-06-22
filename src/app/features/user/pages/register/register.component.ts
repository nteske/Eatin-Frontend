import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiKeys } from '../../../../core/constants/api-keys';
import { AuthService } from '../../services/auth.service';
import { Register } from '../../dto/register';
import { Storage } from '../../../../core/constants/storage';
import { Router } from '@angular/router';
import { Login } from '../../dto/login';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() dogadjaj = new EventEmitter();
  token=ApiKeys.recaptchaToken;
  form: FormGroup;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      ime: new FormControl(null, [Validators.required,Validators.minLength(2)]),
      prezime: new FormControl(null, [Validators.required,Validators.minLength(2)]),
      email: new FormControl(null, [Validators.required,Validators.minLength(6)]),
      password: new FormControl(null, [Validators.required,Validators.minLength(7)]),
      broj: new FormControl(null, [Validators.required,Validators.minLength(6)]),
      kapcaProvera: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit(): void
  {
    this.authService.registerKorisnik(new Register(this.form.value.email,this.form.value.password,this.form.value.ime,this.form.value.prezime,"+381"+this.form.value.broj))
    .subscribe(data=>{

    },
    error => {
      if(error.status === 200) {
        this.authService.loginKorisnik(new Login(this.form.value.email,this.form.value.password))
        .subscribe(data=>{
          localStorage.setItem(Storage.token,'Bearer ' + data['jwt']);
          this.router.navigateByUrl('/');
          this.dogadjaj.emit();
          this.authService.changeMessage();
      });
      }
    }
    );
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
