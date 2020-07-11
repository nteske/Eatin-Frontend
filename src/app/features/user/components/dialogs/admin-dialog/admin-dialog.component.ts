import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '../../../services/user.service';
import { Admin } from '../../../models/admin.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-dialog',
  templateUrl: './admin-dialog.component.html',
  styleUrls: ['./admin-dialog.component.css']
})
export class AdminDialogComponent implements OnInit {

  public flag: number;
  public newPassword: string;

  constructor(public dialogRef: MatDialogRef<AdminDialogComponent>,
              private userService: UserService,
              @Inject (MAT_DIALOG_DATA) public data: Admin,
              private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  public add(): void {
    this.data.lozinkaKorisnika = this.newPassword;
    this.userService.registerAdmin(this.data).subscribe({
      next: data => {
        this.toastr.success("Uspešno dodat admin","Uspeh",{
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
      this.data.lozinkaKorisnika = this.newPassword;
    }
    this.userService.updateAdmin(this.data).subscribe({
      next: data => {
        this.toastr.success("Uspešno modifikovan admin","Uspeh",{
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
    this.userService.deleteUser(this.data.idKorisnika).subscribe({
      next: data => {
        this.toastr.success("Uspešno obrisan admin","Uspeh",{
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
