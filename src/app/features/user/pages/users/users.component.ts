import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Register } from '../../dto/register';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { KlijentDialogComponent } from '../../components/dialogs/klijent-dialog/klijent-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  loaded = false;
  korisnici: Register[];
  uloga = '';

  displayedColumns: string[] = ['ime', 'email', 'telefon', 'actions'];
  dataSource = new MatTableDataSource<Register>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private userService: UserService,
              private cdr: ChangeDetectorRef,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.userService.getKorisnici('').subscribe({
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
    this.cdr.detectChanges()
    this.dataSource.paginator = this.paginator;
    this.loaded = false;
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

  refresh() {
    return new Promise(resolve => setTimeout(resolve, 1000)).then(() => {
      this.selectChanged();
    });
  }
}
