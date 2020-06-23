import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { ApiUrls } from '../../../core/constants/api-urls';
import { ErrorService } from '../../../core/services/error.service';
import { throwError, from } from 'rxjs';
import { Tipizirano } from '../dto/tipizirano';
import { Restoran } from '../models/restoran.model';
import { Storage } from '../../../core/constants/storage';
import { artiklDTO } from '../dto/artiklDTO';
import { Artikl } from '../models/artikl.model';

@Injectable({
  providedIn: 'root'
})
export class ArticlesDisplayService {
  private readonly API_URL = ApiUrls.backend+ApiUrls.articles;

  constructor(private httpClient: HttpClient, private errorService: ErrorService) { }
  public getArtikle(descending,page,restoran,search:string,sortBy,tipArtikla) {
    let params = new HttpParams();
    params = params.append(ApiUrls.searchQuery[0], descending);
    params = params.append(ApiUrls.searchQuery[1], page);
    params = params.append(ApiUrls.searchQuery[4], restoran);
    if(search.length>0)params = params.append(ApiUrls.searchQuery[5], search);
    params = params.append(ApiUrls.searchQuery[2], sortBy);
    if(tipArtikla!=-1)params = params.append(ApiUrls.searchQuery[6], tipArtikla);
    var token=localStorage.getItem(Storage.token);
    if(token==null)token="";
    var headers = new HttpHeaders().set('Authorization', token);
    return this.httpClient.get<artiklDTO>(this.API_URL, { 'headers': headers,params: params })
    .pipe(catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
  }));
  }


  public getArtikl(id) {
    var token=localStorage.getItem(Storage.token);
    if(token==null)token="";
    var headers = new HttpHeaders().set('Authorization', token);
    return this.httpClient.get<Artikl>(this.API_URL+'/'+id, { 'headers': headers})
    .pipe(catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
  }));
  }
}
