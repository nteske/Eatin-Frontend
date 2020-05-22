import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApiUrls } from '../../core/constants/api-urls';
import { Sadrzi } from '../models (to be deleted)/sadrzi.model';

@Injectable({
  providedIn: 'root'
})
export class SadrziService {
  private readonly API_URL = ApiUrls.backend+'/sadrzi/';
  dataChange: BehaviorSubject<Sadrzi[]> = new BehaviorSubject<Sadrzi[]>([]);
  constructor(private httpClient: HttpClient) { }
/*
  public getAllSadrzi(): Observable<Sadrzi[]> {
    this.httpClient.get<Sadrzi[]>(this.API_URL).subscribe(data => {
        this.dataChange.next(data);
    },
    (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
    });

    return this.dataChange.asObservable();
}
    public addSadrzi(sadrzi: Sadrzi): void {
        this.httpClient.post(this.API_URL, sadrzi).subscribe();
    }

    public updateSadrzi(sadrzi: Sadrzi): void {
        this.httpClient.put(this.API_URL, sadrzi).subscribe();
    }

    public deleteSadrzi(id: number): void {
        this.httpClient.delete(this.API_URL + id).subscribe();
    }
*/
}
