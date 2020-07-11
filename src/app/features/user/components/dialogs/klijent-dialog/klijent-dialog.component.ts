import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Register } from '../../../dto/register';
import { UserService } from '../../../services/user.service';
import { Klijent } from '../../../models/klijent.model';

@Component({
  selector: 'app-klijent-dialog',
  templateUrl: './klijent-dialog.component.html',
  styleUrls: ['./klijent-dialog.component.css']
})
export class KlijentDialogComponent implements OnInit {

  public flag: number;
  public newPassword: string;

  constructor(public dialogRef: MatDialogRef<KlijentDialogComponent>,
              private userService: UserService,
              @Inject (MAT_DIALOG_DATA) public data: Klijent,
              private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  public update(): void {
    this.userService.updateKlijent(this.data).subscribe({
      next: res => {
        this.toastr.success("Uspešno modifikovan klijent","Uspeh",{
          closeButton:true,
          timeOut: 10000,
          positionClass:'toast-bottom-right'
        });
      },
      error: err => {
        console.log(err);
      }
    })

  }

  public delete(): void {
    this.userService.deleteUser(this.data.idKorisnika).subscribe({
      next: data => {
        this.toastr.success("Uspešno obrisan klijent","Uspeh",{
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
