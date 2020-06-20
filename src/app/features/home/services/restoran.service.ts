import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { ApiUrls } from '../../../core/constants/api-urls';
import { Lokacija } from '../models/lokacija.model';
import { ErrorService } from '../../../core/services/error.service';
import { throwError } from 'rxjs';
import { Storage } from '../../../core/constants/storage';
import { RestoranDTO } from '../dto/RestoranDTO';

@Injectable({
  providedIn: 'root'
})
export class RestoranService {
  private readonly API_URL = ApiUrls.backend+ApiUrls.restaurant;

  constructor(private httpClient: HttpClient, private errorService: ErrorService) { }
  public getRestorane() {
    let params = new HttpParams();
    params = params.append('descending', "false");
    params = params.append('page', '1');
    params = params.append('sortBy', 'ID');
    var headers = new HttpHeaders().set('Authorization', localStorage.getItem(Storage.token));
    return this.httpClient.get<RestoranDTO>(this.API_URL, { 'headers': headers,params: params })
    .pipe(catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
  }));
  }
}
