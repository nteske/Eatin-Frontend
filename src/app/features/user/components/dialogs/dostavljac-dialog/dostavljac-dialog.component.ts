import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '../../../services/user.service';
import { Dostavljac } from '../../../models/dostavljac.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dostavljac-dialog',
  templateUrl: './dostavljac-dialog.component.html',
  styleUrls: ['./dostavljac-dialog.component.css']
})
export class DostavljacDialogComponent implements OnInit {

  public flag: number;
  public newPassword: string;

  constructor(public dialogRef: MatDialogRef<DostavljacDialogComponent>,
              private userService: UserService,
              @Inject (MAT_DIALOG_DATA) public data: Dostavljac,
              private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  public add(): void {
    this.data.korisnik.lozinkaKorisnika = this.newPassword;
    this.userService.registerDostavljac(this.data).subscribe({
      next: data => {
        this.toastr.success("Uspešno dodat dostavljac","Uspeh",{
          closeButton:true,
          timeOut: 10000,
          positionClass:'toast-bottom-right'
        });
      },
      error: error => {
        console.log(error);
      }
    });
  }

  public update(): void {
    if(this.newPassword != null) {
      this.data.korisnik.lozinkaKorisnika = this.newPassword;
    }
    this.userService.updateDostavljac(this.data).subscribe({
      next: data => {
        this.toastr.success("Uspešno modifikovan dostavljac","Uspeh",{
          closeButton:true,
          timeOut: 10000,
          positionClass:'toast-bottom-right'
        });
      },
      error: error => {
        console.log(error);
      }
    });
  }

  public delete(): void {
    this.userService.deleteUser(this.data.idDostavljaca).subscribe({
      next: data => {
        this.toastr.success("Uspešno obrisan dostavljac","Uspeh",{
          closeButton:true,
          timeOut: 10000,
          positionClass:'toast-bottom-right'
        });
      },
      error: error => {
        console.log(error);
      }
    });
  }

  public cancel(): void {
    this.dialogRef.close();
    this.toastr.success("Odustali ste","Obaveštenje",{
      closeButton:true,
      timeOut: 10000,
      positionClass:'toast-bottom-right'
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
