import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApiUrls } from '../../core/constants/api-urls';
import { TipArtikla } from '../models (to be deleted)/tip_artikla.model';

@Injectable({
  providedIn: 'root'
})
export class TipArtiklaService {
  private readonly API_URL = ApiUrls.backend+'/tip_artikla/';
  dataChange: BehaviorSubject<TipArtikla[]> = new BehaviorSubject<TipArtikla[]>([]);
  constructor(private httpClient: HttpClient) { }
/*
  public getAllTipArtikla(): Observable<TipArtikla[]> {
    this.httpClient.get<TipArtikla[]>(this.API_URL).subscribe(data => {
        this.dataChange.next(data);
    },
    (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
    });

    return this.dataChange.asObservable();
}
    public addTipArtikla(tipTipArtiklaa: TipArtikla): void {
        this.httpClient.post(this.API_URL, tipTipArtiklaa).subscribe();
    }

    public updateTipArtikla(tipTipArtiklaa: TipArtikla): void {
        this.httpClient.put(this.API_URL, tipTipArtiklaa).subscribe();
    }

    public deleteTipArtikla(id: number): void {
        this.httpClient.delete(this.API_URL + id).subscribe();
    }
*/
}
