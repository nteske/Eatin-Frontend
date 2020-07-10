import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Zaposleni } from '../../../models/zaposleni.model';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../services/user.service';
import { RestoranService } from '../../../../home/services/restoran.service';
import { Restoran } from '../../../../home/models/restoran.model';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-zaposleni-dialog',
  templateUrl: './zaposleni-dialog.component.html',
  styleUrls: ['./zaposleni-dialog.component.css']
})
export class ZaposleniDialogComponent implements OnInit {

  public flag: number;
  public newPassword: string;
  public restorani: Restoran[];
  myControl = new FormControl();
  filteredOptions: Observable<Restoran[]>;

  constructor(public dialogRef: MatDialogRef<ZaposleniDialogComponent>,
              private userService: UserService,
              private restoranService: RestoranService,
              @Inject (MAT_DIALOG_DATA) public data: Zaposleni,
              private toastr:ToastrService) { }

  ngOnInit(): void {
    this.restoranService.getRestorane(false, 1, 'ID', '').subscribe({
      next: data => {
        this.restorani = data.content;
        this.filteredOptions = this.myControl.valueChanges
          .pipe(
            startWith(''),
            map(value => typeof value === 'string' ? value : value.name),
            map(name => name ? this._filter(name) : this.restorani.slice())
          );
        if (this.flag === 2 || this.flag === 3) {
          this.myControl.setValue(this.restorani.find(x => x.idRestorana == this.data.restoranId))
        }
      },
      error: error => {
        console.log(error);
      }
    });
  }

  displayFn(restoran: Restoran): string {
    return restoran && restoran.nazivRestorana ? restoran.nazivRestorana : '';
  }

  private _filter(name: string): Restoran[] {
    const filterValue = name.toLowerCase();
    return this.restorani.filter(option => option.nazivRestorana.toLowerCase().indexOf(filterValue) === 0);
  }

  public add(): void {
    this.data.korisnik.lozinkaKorisnika = this.newPassword
    const req = {
      funkcijaZaposlenog: this.data.funkcijaZaposlenog,
      korisnik: this.data.korisnik,
      restoran: this.myControl.value.idRestorana
    };
    this.userService.registerZaposleni(req).subscribe({
      next: data => {
        this.toastr.success("Uspešno dodat zaposleni","Uspeh",{
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
  }

  public delete(): void {
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
