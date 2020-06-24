import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { ApiUrls } from '../../../core/constants/api-urls';
import { ErrorService } from '../../../core/services/error.service';
import { throwError, from } from 'rxjs';
import { Storage } from '../../../core/constants/storage';
import { Lokacija } from '../../home/models/lokacija.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private readonly API_URL = ApiUrls.backend+ApiUrls.locations;

  constructor(private httpClient: HttpClient, private errorService: ErrorService) { }

  getOldUserLocations() {
    var token=localStorage.getItem(Storage.token);
    if(token==null)token="";
    var headers = new HttpHeaders().set('Authorization', token);
    return this.httpClient.get<Lokacija[]>(this.API_URL,{ 'headers': headers })
    .pipe(catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
  }));
  }

  postNewUserLocations(lok:Lokacija) {
    var token=localStorage.getItem(Storage.token);
    if(token==null)token="";
    var headers = new HttpHeaders().set('Authorization', token);
    return this.httpClient.post<Lokacija>(this.API_URL,lok,{ 'headers': headers })
    .pipe(catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
  }));
  }
}
