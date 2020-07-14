import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TipArtikla } from '../../../home/models/tip_artikla';
import { MatPaginator } from '@angular/material/paginator';
import { RestoranService } from '../../../home/services/restoran.service';
import { MatDialog } from '@angular/material/dialog';
import { TipArtiklaDialogComponent } from '../../components/dialogs/tip-artikla-dialog/tip-artikla-dialog.component';

@Component({
  selector: 'app-tipovi-artikla',
  templateUrl: './tipovi-artikla.component.html',
  styleUrls: ['./tipovi-artikla.component.css']
})
export class TipoviArtiklaComponent implements OnInit {

  loaded = false;

  dataSource = new MatTableDataSource<TipArtikla>();
  displayedColumns: string[] = ['opisTipaArtikla', 'actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private restoranService: RestoranService,
              private cdr: ChangeDetectorRef,
              public dialog: MatDialog  ) { }

  ngOnInit(): void {
    this.restoranService.getTipoveArtikala().subscribe({
      next: res => {
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

  public openDialog(flag: number, idTipaArtikla: number, opisTipaArtikla: string) {
    const dialogRef = this.dialog.open(TipArtiklaDialogComponent,
      { data: { idTipaArtikla, opisTipaArtikla } });
    dialogRef.componentInstance.flag = flag;
    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.refresh();
      }
    });
  }

  refresh() {
    return new Promise(resolve => setTimeout(resolve, 1000)).then(() => {
      this.loaded = false;
      this.dataSource = new MatTableDataSource([]);
      this.cdr.detectChanges()
      this.dataSource.paginator = this.paginator;
      this.restoranService.getTipoveArtikala().subscribe({
        next: res => {
          this.loaded = true;
          this.dataSource = new MatTableDataSource(res);
          this.cdr.detectChanges()
          this.dataSource.paginator = this.paginator;
        },
        error: err => {
          console.log(err);
        }
      })
    });
  }
}
