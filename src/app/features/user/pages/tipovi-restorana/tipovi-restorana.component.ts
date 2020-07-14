import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TipRestorana } from '../../../home/models/tip_restorana.model';
import { RestoranService } from '../../../home/services/restoran.service';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { TipRestoranaDialogComponent } from '../../components/dialogs/tip-restorana-dialog/tip-restorana-dialog.component';

@Component({
  selector: 'app-tipovi-restorana',
  templateUrl: './tipovi-restorana.component.html',
  styleUrls: ['./tipovi-restorana.component.css']
})
export class TipoviRestoranaComponent implements OnInit {

  loaded = false;

  dataSource = new MatTableDataSource<TipRestorana>();
  displayedColumns: string[] = ['opisTipaRestorana', 'actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private restoranService: RestoranService,
              private cdr: ChangeDetectorRef,
              public dialog: MatDialog  ) { }

  ngOnInit(): void {
    this.restoranService.getTipoveRestorana().subscribe({
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

  public openDialog(flag: number, idTipaRestorana: number, opisTipaRestorana: string) {
    const dialogRef = this.dialog.open(TipRestoranaDialogComponent,
      { data: { idTipaRestorana, opisTipaRestorana } });
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
      this.restoranService.getTipoveRestorana().subscribe({
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
