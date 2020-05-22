import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApiUrls } from '../../core/constants/api-urls';
import { TipDatuma } from '../models (to be deleted)/tip_datuma.model';

@Injectable({
  providedIn: 'root'
})
export class TipDatumaService {
  private readonly API_URL = ApiUrls.backend+'/tip_datuma/';
  dataChange: BehaviorSubject<TipDatuma[]> = new BehaviorSubject<TipDatuma[]>([]);
  constructor(private httpClient: HttpClient) { }
/*
  public getAllTipDatuma(): Observable<TipDatuma[]> {
    this.httpClient.get<TipDatuma[]>(this.API_URL).subscribe(data => {
        this.dataChange.next(data);
    },
    (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
    });

    return this.dataChange.asObservable();
}
    public addTipDatuma(tipDatuma: TipDatuma): void {
        this.httpClient.post(this.API_URL, tipDatuma).subscribe();
    }

    public updateTipDatuma(tipDatuma: TipDatuma): void {
        this.httpClient.put(this.API_URL, tipDatuma).subscribe();
    }

    public deleteTipDatuma(id: number): void {
        this.httpClient.delete(this.API_URL + id).subscribe();
    }
*/
}
