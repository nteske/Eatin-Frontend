import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApiUrls } from '../../core/constants/api-urls';
import { Mera } from '../models/mera.model';

@Injectable({
  providedIn: 'root'
})
export class MeraService {
  private readonly API_URL = ApiUrls.backend+'/mera/';
  dataChange: BehaviorSubject<Mera[]> = new BehaviorSubject<Mera[]>([]);
  constructor(private httpClient: HttpClient) { }
/*
  public getAllMera(): Observable<Mera[]> {
    this.httpClient.get<Mera[]>(this.API_URL).subscribe(data => {
        this.dataChange.next(data);
    },
    (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
    });

    return this.dataChange.asObservable();
}
    public addMera(mera: Mera): void {
        this.httpClient.post(this.API_URL, mera).subscribe();
    }

    public updateMera(mera: Mera): void {
        this.httpClient.put(this.API_URL, mera).subscribe();
    }

    public deleteMera(id: number): void {
        this.httpClient.delete(this.API_URL + id).subscribe();
    }
*/
}
