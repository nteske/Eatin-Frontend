import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Register } from '../../dto/register';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  loaded = false;
  korisnici: Register[];
  uloga = '';

  displayedColumns: string[] = ['ime', 'email', 'telefon'];
  dataSource = new MatTableDataSource<Register>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private userService: UserService,
              private cdr: ChangeDetectorRef) { }

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

}
