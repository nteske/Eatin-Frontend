import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApiUrls } from '../core/constants/api-urls';
import { Lokacija } from '../models/lokacija.model';

@Injectable({
  providedIn: 'root'
})
export class LokacijaService {
  private readonly API_URL = ApiUrls.backend+'/lokacija/';
  dataChange: BehaviorSubject<Lokacija[]> = new BehaviorSubject<Lokacija[]>([]);
  constructor(private httpClient: HttpClient) { }
/*
  public getAllLokacija(): Observable<Lokacija[]> {
    this.httpClient.get<Lokacija[]>(this.API_URL).subscribe(data => {
        this.dataChange.next(data);
    },
    (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
    });

    return this.dataChange.asObservable();
}
    public addLokacija(lokacija: Lokacija): void {
        this.httpClient.post(this.API_URL, lokacija).subscribe();
    }

    public updateLokacija(lokacija: Lokacija): void {
        this.httpClient.put(this.API_URL, lokacija).subscribe();
    }

    public deleteLokacija(id: number): void {
        this.httpClient.delete(this.API_URL + id).subscribe();
    }
*/
}
