import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApiUrls } from '../../core/constants/api-urls';
import { TipRestorana } from '../models (to be deleted)/tip_restorana.model';

@Injectable({
  providedIn: 'root'
})
export class TipRestoranaService {
  private readonly API_URL = ApiUrls.backend+'/tip_restorana/';
  dataChange: BehaviorSubject<TipRestorana[]> = new BehaviorSubject<TipRestorana[]>([]);
  constructor(private httpClient: HttpClient) { }
/*
  public getAllTipRestorana(): Observable<TipRestorana[]> {
    this.httpClient.get<TipRestorana[]>(this.API_URL).subscribe(data => {
        this.dataChange.next(data);
    },
    (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
    });

    return this.dataChange.asObservable();
}
    public addTipRestorana(tipRestorana: TipRestorana): void {
        this.httpClient.post(this.API_URL, tipRestorana).subscribe();
    }

    public updateTipRestorana(tipRestorana: TipRestorana): void {
        this.httpClient.put(this.API_URL, tipRestorana).subscribe();
    }

    public deleteTipRestorana(id: number): void {
        this.httpClient.delete(this.API_URL + id).subscribe();
    }
*/
}
