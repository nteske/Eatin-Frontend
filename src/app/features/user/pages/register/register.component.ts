import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiKeys } from '../../../../core/constants/api-keys';
import { AuthService } from '../../services/auth.service';
import { Register } from '../../dto/register';
import { Storage } from '../../../../core/constants/storage';
import { Router } from '@angular/router';
import { Login } from '../../dto/login';
import { ToastrService } from 'ngx-toastr';


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
              private router: Router,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      ime: new FormControl(null, [Validators.required,Validators.minLength(2),Validators.maxLength(20)]),
      prezime: new FormControl(null, [Validators.required,Validators.minLength(2),Validators.maxLength(20)]),
      email: new FormControl(null, [Validators.required,Validators.minLength(6),Validators.maxLength(30)]),
      password: new FormControl(null, [Validators.required,Validators.minLength(7),Validators.maxLength(20)]),
      broj: new FormControl(null, [Validators.required,Validators.minLength(6),Validators.maxLength(9)]),
      kapcaProvera: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit(): void
  {
   // console.log("Registracija",new Register(this.form.value.email,this.form.value.password,this.form.value.ime,this.form.value.prezime,"+381"+this.form.value.broj))
    this.authService.registerKorisnik(new Register(this.form.value.email,this.form.value.password,this.form.value.ime,this.form.value.prezime,"+381"+this.form.value.broj))
    .subscribe(data=>{
      this.toastr.success("Aktivirajte nalog pomoću email poruke koju smo Vam poslali","Uspeh",{
        closeButton:true,
        timeOut: 10000,
        positionClass:'toast-bottom-right'
      });
        this.router.navigateByUrl('/user/login');

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
