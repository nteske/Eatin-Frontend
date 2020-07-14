import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TipRestorana } from '../../../../home/models/tip_restorana.model';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-tip-restorana-dialog',
  templateUrl: './tip-restorana-dialog.component.html',
  styleUrls: ['./tip-restorana-dialog.component.css']
})
export class TipRestoranaDialogComponent implements OnInit {

  public flag: number;

  constructor(public dialogRef: MatDialogRef<TipRestoranaDialogComponent>,
              private userService: UserService,
              @Inject (MAT_DIALOG_DATA) public data: TipRestorana,
              private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  public add(): void {
    this.userService.postTipRestoran(this.data).subscribe({
      next: data => {
        this.toastr.success("Uspešno dodat tip restorana","Uspeh",{
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
    this.userService.putTipRestoran(this.data).subscribe({
      next: data => {
        this.toastr.success("Uspešno modifikovan tip restorana","Uspeh",{
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

}
