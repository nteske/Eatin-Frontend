import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApiUrls } from '../../core/constants/api-urls';
import { MozeSadrzatiPriloge } from '../models/moze_sadrzati_priloge.model';

@Injectable({
  providedIn: 'root'
})
export class MozeSadrzatiPrilogeService {
  private readonly API_URL = ApiUrls.backend+'/moze_sadrzati_priloge/';
  dataChange: BehaviorSubject<MozeSadrzatiPriloge[]> = new BehaviorSubject<MozeSadrzatiPriloge[]>([]);
  constructor(private httpClient: HttpClient) { }
/*
  public getAllMozeSadrzatiPriloge(): Observable<MozeSadrzatiPriloge[]> {
    this.httpClient.get<MozeSadrzatiPriloge[]>(this.API_URL).subscribe(data => {
        this.dataChange.next(data);
    },
    (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
    });

    return this.dataChange.asObservable();
}
    public addMozeSadrzatiPriloge(mozeSadrzatiPriloge: MozeSadrzatiPriloge): void {
        this.httpClient.post(this.API_URL, mozeSadrzatiPriloge).subscribe();
    }

    public updateMozeSadrzatiPriloge(mozeSadrzatiPriloge: MozeSadrzatiPriloge): void {
        this.httpClient.put(this.API_URL, mozeSadrzatiPriloge).subscribe();
    }

    public deleteMozeSadrzatiPriloge(id: number): void {
        this.httpClient.delete(this.API_URL + id).subscribe();
    }
*/
}
