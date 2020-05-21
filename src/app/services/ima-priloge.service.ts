import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApiUrls } from '../core/constants/api-urls';
import { ImaPriloge } from '../models/ima_priloge.model';

@Injectable({
  providedIn: 'root'
})
export class ImaPrilogeService {
  private readonly API_URL = ApiUrls.backend+'/ima_priloge/';
  dataChange: BehaviorSubject<ImaPriloge[]> = new BehaviorSubject<ImaPriloge[]>([]);
  constructor(private httpClient: HttpClient) { }
/*
  public getAllImaPriloge(): Observable<ImaPriloge[]> {
    this.httpClient.get<ImaPriloge[]>(this.API_URL).subscribe(data => {
        this.dataChange.next(data);
    },
    (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
    });

    return this.dataChange.asObservable();
}
    public addImaPriloge(imaPriloge: ImaPriloge): void {
        this.httpClient.post(this.API_URL, imaPriloge).subscribe();
    }

    public updateImaPriloge(imaPriloge: ImaPriloge): void {
        this.httpClient.put(this.API_URL, imaPriloge).subscribe();
    }

    public deleteImaPriloge(id: number): void {
        this.httpClient.delete(this.API_URL + id).subscribe();
    }
*/
}
