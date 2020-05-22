import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApiUrls } from '../../core/constants/api-urls';
import { Dostavljac } from '../models (to be deleted)/dostavljac.model';

@Injectable({
  providedIn: 'root'
})
export class DostavljacService {
  private readonly API_URL = ApiUrls.backend+'/dostavljac/';
  dataChange: BehaviorSubject<Dostavljac[]> = new BehaviorSubject<Dostavljac[]>([]);
  constructor(private httpClient: HttpClient) { }
/*
  public getAllDostavljac(): Observable<Dostavljac[]> {
    this.httpClient.get<Dostavljac[]>(this.API_URL).subscribe(data => {
        this.dataChange.next(data);
    },
    (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
    });

    return this.dataChange.asObservable();
}
    public addDostavljac(dostavljac: Dostavljac): void {
        this.httpClient.post(this.API_URL, dostavljac).subscribe();
    }

    public updateDostavljac(dostavljac: Dostavljac): void {
        this.httpClient.put(this.API_URL, dostavljac).subscribe();
    }

    public deleteDostavljac(id: number): void {
        this.httpClient.delete(this.API_URL + id).subscribe();
    }
*/
}
