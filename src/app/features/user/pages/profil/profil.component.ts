import { Component, OnInit } from '@angular/core';
import { Korisnik } from '../../models/korisnik.model';
import { AuthService } from '../../services/auth.service';
import { Register } from '../../dto/register';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  public loaded = false;
  korisnik: Register;
  currentPassword: '';
  newPassword: '';

  constructor(private auth: AuthService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.auth.getUserDetails().subscribe({
      next: res => {
        this.korisnik = res;
        this.loaded = true;
      },
      error: err => {
        console.log(err);
      }
    })
  }

  update(): void
  {
    if(this.korisnik.lozinkaKorisnika !== this.currentPassword) {
      this.toastr.error("Ažuriranje neuspešno!","Error",{
        closeButton:true,
        positionClass:'toast-bottom-right'
      });
    } else {
      if(Boolean(this.newPassword)) {
        this.korisnik.lozinkaKorisnika = this.newPassword;
      }
      this.auth.updateProfile(this.korisnik).subscribe({
        next: res => {
          this.toastr.success("Ažuriranje uspešno!","Uspeh",{
            closeButton:true,
            positionClass:'toast-bottom-right'
          });
          window.location.reload();
        },
        error: err => {
          this.toastr.error("Ažuriranje neuspešno!","Error",{
            closeButton:true,
            positionClass:'toast-bottom-right'
          });
        }
      })
    }
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
