import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApiUrls } from '../../core/constants/api-urls';
import { Radi } from '../models (to be deleted)/radi.model';

@Injectable({
  providedIn: 'root'
})
export class RadiService {
  private readonly API_URL = ApiUrls.backend+'/radi/';
  dataChange: BehaviorSubject<Radi[]> = new BehaviorSubject<Radi[]>([]);
  constructor(private httpClient: HttpClient) { }
/*
  public getAllRadi(): Observable<Radi[]> {
    this.httpClient.get<Radi[]>(this.API_URL).subscribe(data => {
        this.dataChange.next(data);
    },
    (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
    });

    return this.dataChange.asObservable();
}
    public addRadi(radi: Radi): void {
        this.httpClient.post(this.API_URL, radi).subscribe();
    }

    public updateRadi(radi: Radi): void {
        this.httpClient.put(this.API_URL, radi).subscribe();
    }

    public deleteRadi(id: number): void {
        this.httpClient.delete(this.API_URL + id).subscribe();
    }
*/
}
