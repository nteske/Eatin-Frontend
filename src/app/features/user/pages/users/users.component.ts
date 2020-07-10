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

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  loaded = false;
  korisnici: Register[];
  dostavljaci: Dostavljac[];
  zaposleni: Zaposleni[];
  uloga = '1';

  dataSource = new MatTableDataSource<Register>();
  displayedColumns: string[] = ['ime', 'email', 'telefon', 'actions'];

  dataSourceDostavljaci = new MatTableDataSource<Dostavljac>();
  displayedColumnsDostavljaci: string[] = ['ime', 'email', 'telefon', 'prevoznoSredstvo', 'actions'];

  dataSourceZaposleni = new MatTableDataSource<Zaposleni>();
  displayedColumnsZaposleni: string[] = ['ime', 'email', 'telefon', 'funkcijaZaposlenog', 'actions'];



  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private userService: UserService,
              private cdr: ChangeDetectorRef,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.userService.getKorisnici(this.uloga).subscribe({
      next: res => {
        this.korisnici = res;
        this.loaded = true;
        this.dataSource = new MatTableDataSource(res);
        this.cdr.detectChanges()
        this.dataSource.paginator = this.paginator;
      },
      error: err => {
        console.log(err);
      }
    })
  }

  selectChanged() {
    this.dataSource = new MatTableDataSource([]);
    this.dataSourceDostavljaci = new MatTableDataSource([]);
    this.dataSourceZaposleni = new MatTableDataSource([]);
    this.cdr.detectChanges()
    this.dataSource.paginator = this.paginator;
    this.loaded = false;
    if(this.uloga === '1' || this.uloga === '4') {
      this.userService.getKorisnici(this.uloga).subscribe({
        next: res => {
          this.korisnici = res;
          this.loaded = true;
          this.dataSource = new MatTableDataSource(res);
          this.cdr.detectChanges()
          this.dataSource.paginator = this.paginator;
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
        },
        error: err => {
          console.log(err);
        }
      })
    }

  }

  public openDialog(flag: number, imeKorisnika: string, prezimeKorisnika: string, emailKorisnika: string, telefonKorisnika: string, lozinkaKorisnika: string) {
    const dialogRef = this.dialog.open(KlijentDialogComponent,
      { data: {  imeKorisnika, prezimeKorisnika, emailKorisnika, telefonKorisnika, lozinkaKorisnika} });
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

  refresh() {
    return new Promise(resolve => setTimeout(resolve, 1000)).then(() => {
      this.selectChanged();
    });
  }
}
