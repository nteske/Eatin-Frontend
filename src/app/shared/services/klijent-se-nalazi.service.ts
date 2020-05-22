import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApiUrls } from '../../core/constants/api-urls';
import { KlijentSeNalazi } from '../models/klijent_se_nalazi.model';

@Injectable({
  providedIn: 'root'
})
export class KlijentSeNalaziService {
  private readonly API_URL = ApiUrls.backend+'/klijent_se_nalazi/';
  dataChange: BehaviorSubject<KlijentSeNalazi[]> = new BehaviorSubject<KlijentSeNalazi[]>([]);
  constructor(private httpClient: HttpClient) { }
/*
  public getAllKlijentSeNalazi(): Observable<KlijentSeNalazi[]> {
    this.httpClient.get<KlijentSeNalazi[]>(this.API_URL).subscribe(data => {
        this.dataChange.next(data);
    },
    (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
    });

    return this.dataChange.asObservable();
}
    public addKlijentSeNalazi(klijentSeNalazi: KlijentSeNalazi): void {
        this.httpClient.post(this.API_URL, klijentSeNalazi).subscribe();
    }

    public updateKlijentSeNalazi(klijentSeNalazi: KlijentSeNalazi): void {
        this.httpClient.put(this.API_URL, klijentSeNalazi).subscribe();
    }

    public deleteKlijentSeNalazi(id: number): void {
        this.httpClient.delete(this.API_URL + id).subscribe();
    }
*/
}
