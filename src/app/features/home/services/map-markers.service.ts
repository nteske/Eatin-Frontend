import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { ApiUrls } from '../../../core/constants/api-urls';
import { Lokacija } from '../models/lokacija.model';

@Injectable({
  providedIn: 'root'
})
export class MapMarkersService {
  private readonly API_URL = ApiUrls.backend+ApiUrls.restorant;

  constructor(private httpClient: HttpClient) { }
  public getMarkers() {
    return this.httpClient.get<Lokacija[]>(this.API_URL+ApiUrls.locations).
    pipe();
  }
}
