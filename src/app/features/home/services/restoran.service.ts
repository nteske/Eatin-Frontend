import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { ApiUrls } from '../../../core/constants/api-urls';
import { Lokacija } from '../models/lokacija.model';
import { ErrorService } from '../../../core/services/error.service';
import { throwError } from 'rxjs';
import { Storage } from '../../../core/constants/storage';
import { RestoranDTO } from '../dto/RestoranDTO';
import { TipRestorana } from '../models/tip_restorana.model';

@Injectable({
  providedIn: 'root'
})
export class RestoranService {
  private readonly API_URL = ApiUrls.backend;

  constructor(private httpClient: HttpClient, private errorService: ErrorService) { }
  public getRestorane(descending,page,sortBy,tip) {
    let params = new HttpParams();
    params = params.append(ApiUrls.searchQuery[0], descending);
    params = params.append(ApiUrls.searchQuery[1], page);
    params = params.append(ApiUrls.searchQuery[2], sortBy);
    if(tip!=-1){params = params.append(ApiUrls.searchQuery[3], tip);}
    var token=localStorage.getItem(Storage.token);
    if(token==null)token="";
    var headers = new HttpHeaders().set('Authorization', token);
    return this.httpClient.get<RestoranDTO>(this.API_URL+ApiUrls.restaurant, { 'headers': headers,params: params })
    .pipe(catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
  }));
  }

  public getTipoveRestorana() {
    var token=localStorage.getItem(Storage.token);
    if(token==null)token="";
    var headers = new HttpHeaders().set('Authorization', token);
    return this.httpClient.get<TipRestorana[]>(this.API_URL+ApiUrls.tipRestorana, { 'headers': headers })
    .pipe(catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
  }));
  }
}
