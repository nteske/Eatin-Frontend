import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Register } from '../../dto/register';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { KlijentDialogComponent } from '../../components/dialogs/klijent-dialog/klijent-dialog.component';
import { Dostavljac } from '../../models/dostavljac.model';
import { DostavljacDialogComponent } from '../../components/dialogs/dostavljac-dialog/dostavljac-dialog.component';
import { Zaposleni } from '../../models/zaposleni.model';
import { ZaposleniDialogComponent } from '../../components/dialogs/zaposleni-dialog/zaposleni-dialog.component';
import { Klijent } from '../../models/klijent.model';
import { Admin } from '../../models/admin.model';
import { AdminDialogComponent } from '../../components/dialogs/admin-dialog/admin-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  loaded = false;
  uloga = '1';

  dataSourceKlijent = new MatTableDataSource<Klijent>();
  displayedColumnsKlijent: string[] = ['ime', 'email', 'telefon', 'actions'];

  dataSourceAdmin = new MatTableDataSource<Klijent>();
  displayedColumnsAdmin: string[] = ['ime', 'email', 'telefon', 'actions'];

  dataSourceDostavljaci = new MatTableDataSource<Dostavljac>();
  displayedColumnsDostavljaci: string[] = ['ime', 'email', 'telefon', 'prevoznoSredstvo', 'actions'];

  dataSourceZaposleni = new MatTableDataSource<Zaposleni>();
  displayedColumnsZaposleni: string[] = ['ime', 'email', 'telefon', 'funkcijaZaposlenog', 'actions'];



  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private userService: UserService,
              private cdr: ChangeDetectorRef,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.userService.getKlijenti().subscribe({
      next: res => {
        this.loaded = true;
        this.dataSourceKlijent = new MatTableDataSource(res);
        this.cdr.detectChanges()
        this.dataSourceKlijent.paginator = this.paginator;
        this.dataSourceKlijent.filterPredicate = (data: Klijent, filter: string) => {
          return (data.imeKorisnika + ' ' + data.prezimeKorisnika).toLocaleLowerCase().includes(filter);
        };
      },
      error: err => {
        console.log(err);
      }
    })
  }

  selectChanged() {
    (document.getElementById('fiterFiled') as HTMLInputElement).value = '';
    this.dataSourceKlijent = new MatTableDataSource([]);
    this.dataSourceAdmin = new MatTableDataSource([]);
    this.dataSourceDostavljaci = new MatTableDataSource([]);
    this.dataSourceZaposleni = new MatTableDataSource([]);
    this.cdr.detectChanges()
    this.dataSourceKlijent.paginator = this.paginator;
    this.loaded = false;
    if(this.uloga === '4') {
      this.userService.getAdmini().subscribe({
        next: res => {
          this.loaded = true;
          this.dataSourceAdmin = new MatTableDataSource(res);
          this.cdr.detectChanges()
          this.dataSourceAdmin.paginator = this.paginator;
          this.dataSourceAdmin.filterPredicate = (data: Admin, filter: string) => {
            return (data.imeKorisnika + ' ' + data.prezimeKorisnika).toLocaleLowerCase().includes(filter);
          };
        },
        error: err => {
          console.log(err);
        }
      })
    } else if (this.uloga === '3') {
      this.userService.getDostavljaci().subscribe({
        next: res => {
          this.loaded = true;
          this.dataSourceDostavljaci = new MatTableDataSource(res);
          this.cdr.detectChanges()
          this.dataSourceDostavljaci.paginator = this.paginator;
          this.dataSourceDostavljaci.filterPredicate = (data: Dostavljac, filter: string) => {
            return (data.korisnik.imeKorisnika + ' ' + data.korisnik.prezimeKorisnika).toLocaleLowerCase().includes(filter);
          };
        },
        error: err => {
          console.log(err);
        }
      })
    } else if (this.uloga === '2') {
      this.userService.getZaposleni().subscribe({
        next: res => {
          this.loaded = true;
          this.dataSourceZaposleni = new MatTableDataSource(res);
          this.cdr.detectChanges()
          this.dataSourceZaposleni.paginator = this.paginator;
          this.dataSourceZaposleni.filterPredicate = (data: Zaposleni, filter: string) => {
            return (data.korisnik.imeKorisnika + ' ' + data.korisnik.prezimeKorisnika).toLocaleLowerCase().includes(filter);
          };
        },
        error: err => {
          console.log(err);
        }
      })
    } else if (this.uloga === '1') {
      this.userService.getKlijenti().subscribe({
        next: res => {
          this.loaded = true;
          this.dataSourceKlijent = new MatTableDataSource(res);
          this.cdr.detectChanges()
          this.dataSourceKlijent.paginator = this.paginator;
          this.dataSourceKlijent.filterPredicate = (data: Klijent, filter: string) => {
            return (data.imeKorisnika + ' ' + data.prezimeKorisnika).toLocaleLowerCase().includes(filter);
          };
        },
        error: err => {
          console.log(err);
        }
      })
    }

  }

  public openDialogKlijent(flag: number, idKorisnika: number, imeKorisnika: string, prezimeKorisnika: string, emailKorisnika: string, telefonKorisnika: string, lozinkaKorisnika: string) {
    const dialogRef = this.dialog.open(KlijentDialogComponent,
      { data: { idKorisnika, imeKorisnika, prezimeKorisnika, emailKorisnika, telefonKorisnika, lozinkaKorisnika} });
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.refresh();
      }
    });
  }

  public openDialogAdmin(flag: number, idKorisnika: number, imeKorisnika: string, prezimeKorisnika: string, emailKorisnika: string, telefonKorisnika: string, lozinkaKorisnika: string) {
    const dialogRef = this.dialog.open(AdminDialogComponent,
      { data: { idKorisnika, imeKorisnika, prezimeKorisnika, emailKorisnika, telefonKorisnika, lozinkaKorisnika} });
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.refresh();
      }
    });
  }

  public openDialogDostavljac(flag: number, idDostavljaca: number, imeKorisnika: string, prezimeKorisnika: string, emailKorisnika: string, telefonKorisnika: string, lozinkaKorisnika: string, prevoznoSredstvo: string) {
    const dialogRef = this.dialog.open(DostavljacDialogComponent,
      { data: { idDostavljaca, korisnik: { imeKorisnika, prezimeKorisnika, emailKorisnika, telefonKorisnika, lozinkaKorisnika }, prevoznoSredstvo } });
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.refresh();
      }
    });
  }

  public openDialogZaposleni(flag: number, idZaposlenog: number, imeKorisnika: string, prezimeKorisnika: string, emailKorisnika: string, telefonKorisnika: string, lozinkaKorisnika: string, funkcijaZaposlenog: string, restoranId: number) {
    const dialogRef = this.dialog.open(ZaposleniDialogComponent,
      { data: { idZaposlenog, korisnik: { imeKorisnika, prezimeKorisnika, emailKorisnika, telefonKorisnika, lozinkaKorisnika }, funkcijaZaposlenog, restoranId } });
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.refresh();
      }
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.toLocaleLowerCase();
    if(this.uloga === '4') {
      this.dataSourceAdmin.filter = filterValue;
    } else if (this.uloga === '1') {
      this.dataSourceKlijent.filter = filterValue;
    } else if (this.uloga === '3') {
      this.dataSourceDostavljaci.filter = filterValue;
    } else if (this.uloga === '2') {
      this.dataSourceZaposleni.filter = filterValue;
    }
  }

  refresh() {
    return new Promise(resolve => setTimeout(resolve, 1000)).then(() => {
      this.selectChanged();
    });
  }
}
