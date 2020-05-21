import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApiUrls } from '../core/constants/api-urls';
import { Restoran } from '../models/restoran.model';

@Injectable({
  providedIn: 'root'
})
export class RestoranService {
  private readonly API_URL = ApiUrls.backend+'/restoran/';
  dataChange: BehaviorSubject<Restoran[]> = new BehaviorSubject<Restoran[]>([]);
  constructor(private httpClient: HttpClient) { }
/*
  public getAllRestoran(): Observable<Restoran[]> {
    this.httpClient.get<Restoran[]>(this.API_URL).subscribe(data => {
        this.dataChange.next(data);
    },
    (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
    });

    return this.dataChange.asObservable();
}
    public addRestoran(restoran: Restoran): void {
        this.httpClient.post(this.API_URL, restoran).subscribe();
    }

    public updateRestoran(restoran: Restoran): void {
        this.httpClient.put(this.API_URL, restoran).subscribe();
    }

    public deleteRestoran(id: number): void {
        this.httpClient.delete(this.API_URL + id).subscribe();
    }
*/
}
