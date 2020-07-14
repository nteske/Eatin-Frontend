import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '../../../services/user.service';
import { TipArtikla } from '../../../../home/models/tip_artikla';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tip-artikla-dialog',
  templateUrl: './tip-artikla-dialog.component.html',
  styleUrls: ['./tip-artikla-dialog.component.css']
})
export class TipArtiklaDialogComponent implements OnInit {

  public flag: number;

  constructor(public dialogRef: MatDialogRef<TipArtiklaDialogComponent>,
              private userService: UserService,
              @Inject (MAT_DIALOG_DATA) public data: TipArtikla,
              private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  public add(): void {
    this.userService.postTipArtikla(this.data).subscribe({
      next: data => {
        this.toastr.success("Uspešno dodat tip artikla","Uspeh",{
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
    this.userService.putTipArtikla(this.data).subscribe({
      next: data => {
        this.toastr.success("Uspešno modifikovan tip artikla","Uspeh",{
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
