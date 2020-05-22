import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApiUrls } from '../../core/constants/api-urls';
import { RestoranSeNalazi } from '../models/restoran_se_nalazi.model';

@Injectable({
  providedIn: 'root'
})
export class RestoranSeNalaziService {
  private readonly API_URL = ApiUrls.backend+'/restoran_se_nalazi/';
  dataChange: BehaviorSubject<RestoranSeNalazi[]> = new BehaviorSubject<RestoranSeNalazi[]>([]);
  constructor(private httpClient: HttpClient) { }
/*
  public getAllRestoranSeNalazi(): Observable<RestoranSeNalazi[]> {
    this.httpClient.get<RestoranSeNalazi[]>(this.API_URL).subscribe(data => {
        this.dataChange.next(data);
    },
    (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
    });

    return this.dataChange.asObservable();
}
    public addRestoranSeNalazi(restoranSeNalazi: RestoranSeNalazi): void {
        this.httpClient.post(this.API_URL, restoranSeNalazi).subscribe();
    }

    public updateRestoranSeNalazi(restoranSeNalazi: RestoranSeNalazi): void {
        this.httpClient.put(this.API_URL, restoranSeNalazi).subscribe();
    }

    public deleteRestoranSeNalazi(id: number): void {
        this.httpClient.delete(this.API_URL + id).subscribe();
    }
*/
}
