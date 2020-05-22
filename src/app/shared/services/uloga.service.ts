import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApiUrls } from '../../core/constants/api-urls';
import { Uloga } from '../models/uloga.model';

@Injectable({
  providedIn: 'root'
})
export class UlogaService {
  private readonly API_URL = ApiUrls.backend+'/uloga/';
  dataChange: BehaviorSubject<Uloga[]> = new BehaviorSubject<Uloga[]>([]);
  constructor(private httpClient: HttpClient) { }
/*
  public getAllUloga(): Observable<Uloga[]> {
    this.httpClient.get<Uloga[]>(this.API_URL).subscribe(data => {
        this.dataChange.next(data);
    },
    (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
    });

    return this.dataChange.asObservable();
}
    public addUloga(uloga: Uloga): void {
        this.httpClient.post(this.API_URL, uloga).subscribe();
    }

    public updateUloga(uloga: Uloga): void {
        this.httpClient.put(this.API_URL, uloga).subscribe();
    }

    public deleteUloga(id: number): void {
        this.httpClient.delete(this.API_URL + id).subscribe();
    }
*/
}
