import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApiUrls } from '../core/constants/api-urls';
import { Prilog } from '../models/prilog.model';

@Injectable({
  providedIn: 'root'
})
export class PrilogService {
  private readonly API_URL = ApiUrls.backend+'/prilog/';
  dataChange: BehaviorSubject<Prilog[]> = new BehaviorSubject<Prilog[]>([]);
  constructor(private httpClient: HttpClient) { }
/*
  public getAllPrilog(): Observable<Prilog[]> {
    this.httpClient.get<Prilog[]>(this.API_URL).subscribe(data => {
        this.dataChange.next(data);
    },
    (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
    });

    return this.dataChange.asObservable();
}
    public addPrilog(prilog: Prilog): void {
        this.httpClient.post(this.API_URL, prilog).subscribe();
    }

    public updatePrilog(prilog: Prilog): void {
        this.httpClient.put(this.API_URL, prilog).subscribe();
    }

    public deletePrilog(id: number): void {
        this.httpClient.delete(this.API_URL + id).subscribe();
    }
*/
}
