import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApiUrls } from '../core/constants/api-urls';
import { MozeBitiMere } from '../models/moze_biti_mere.model';

@Injectable({
  providedIn: 'root'
})
export class MozeBitiMereService {
  private readonly API_URL = ApiUrls.backend+'/moze_biti_mere/';
  dataChange: BehaviorSubject<MozeBitiMere[]> = new BehaviorSubject<MozeBitiMere[]>([]);
  constructor(private httpClient: HttpClient) { }
/*
  public getAllMozeBitiMere(): Observable<MozeBitiMere[]> {
    this.httpClient.get<MozeBitiMere[]>(this.API_URL).subscribe(data => {
        this.dataChange.next(data);
    },
    (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
    });

    return this.dataChange.asObservable();
}
    public addMozeBitiMere(mozeBitiMere: MozeBitiMere): void {
        this.httpClient.post(this.API_URL, mozeBitiMere).subscribe();
    }

    public updateMozeBitiMere(mozeBitiMere: MozeBitiMere): void {
        this.httpClient.put(this.API_URL, mozeBitiMere).subscribe();
    }

    public deleteMozeBitiMere(id: number): void {
        this.httpClient.delete(this.API_URL + id).subscribe();
    }
*/
}
