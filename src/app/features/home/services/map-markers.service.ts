import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { ApiUrls } from '../../../core/constants/api-urls';
import { Lokacija } from '../models/lokacija.model';
import { ErrorService } from '../../../core/services/error.service';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapMarkersService {
  private readonly API_URL = ApiUrls.backend+ApiUrls.restaurant;

  constructor(private httpClient: HttpClient, private errorService: ErrorService) { }
  public getMarkers() {
    return this.httpClient.get<Lokacija[]>(this.API_URL+ApiUrls.locations)
    .pipe(catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
  }));
  }
}
