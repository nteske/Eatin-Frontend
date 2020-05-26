import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Login } from '../../dto/login';  
import { Storage } from '../../../../core/constants/storage';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  @Output() dogadjaj = new EventEmitter();

  constructor(private authService: AuthService) { }

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
      localStorage.setItem(Storage.token,data['token']);
      this.dogadjaj.emit();
      this.authService.changeMessage();
    });
  }

}
