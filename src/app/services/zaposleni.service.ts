import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApiUrls } from '../core/constants/api-urls';
import { Zaposleni } from '../models/zaposleni.model';

@Injectable({
  providedIn: 'root'
})
export class ZaposleniService {
  private readonly API_URL = ApiUrls.backend+'/zaposleni/';
  dataChange: BehaviorSubject<Zaposleni[]> = new BehaviorSubject<Zaposleni[]>([]);
  constructor(private httpClient: HttpClient) { }
/*
  public getAllZaposleni(): Observable<Zaposleni[]> {
    this.httpClient.get<Zaposleni[]>(this.API_URL).subscribe(data => {
        this.dataChange.next(data);
    },
    (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
    });

    return this.dataChange.asObservable();
}
    public addZaposleni(zaposleni: Zaposleni): void {
        this.httpClient.post(this.API_URL, zaposleni).subscribe();
    }

    public updateZaposleni(zaposleni: Zaposleni): void {
        this.httpClient.put(this.API_URL, zaposleni).subscribe();
    }

    public deleteZaposleni(id: number): void {
        this.httpClient.delete(this.API_URL + id).subscribe();
    }
*/
}
