import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApiUrls } from '../../core/constants/api-urls';
import { JeTipa } from '../models (to be deleted)/je_tipa.model';

@Injectable({
  providedIn: 'root'
})
export class JeTipaService {
  private readonly API_URL = ApiUrls.backend+'/je_tipa/';
  dataChange: BehaviorSubject<JeTipa[]> = new BehaviorSubject<JeTipa[]>([]);
  constructor(private httpClient: HttpClient) { }
/*
  public getAllJeTipa(): Observable<JeTipa[]> {
    this.httpClient.get<JeTipa[]>(this.API_URL).subscribe(data => {
        this.dataChange.next(data);
    },
    (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
    });

    return this.dataChange.asObservable();
}
    public addJeTipa(jeTipa: JeTipa): void {
        this.httpClient.post(this.API_URL, jeTipa).subscribe();
    }

    public updateJeTipa(jeTipa: JeTipa): void {
        this.httpClient.put(this.API_URL, jeTipa).subscribe();
    }

    public deleteJeTipa(id: number): void {
        this.httpClient.delete(this.API_URL + id).subscribe();
    }
*/
}
