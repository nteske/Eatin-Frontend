import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { ApiUrls } from '../../../core/constants/api-urls';
import { ErrorService } from '../../../core/services/error.service';
import { throwError, from } from 'rxjs';
import { Tipizirano } from '../dto/tipizirano';
import { Restoran } from '../models/restoran.model';
import { Search } from '../dto/search';
import { PrikazArtikla } from '../dto/prikazArtikla';
import { Storage } from '../../../core/constants/storage';

@Injectable({
  providedIn: 'root'
})
export class ArticlesDisplayService {
  private readonly API_URL = ApiUrls.backend+ApiUrls.articles;

  constructor(private httpClient: HttpClient, private errorService: ErrorService) { }
  public getArticlesByTypes() {
    return this.httpClient.get<Tipizirano[]>(this.API_URL+ApiUrls.bytypes)
    .pipe(catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
  }));
  }

  public getArticleDisplayById(id) {
    return this.httpClient.get<PrikazArtikla>(this.API_URL+ApiUrls.display+'/'+id)
    .pipe(catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
  }));
  }
  public getAllRestourants() {
    return this.httpClient.get<Restoran[]>(ApiUrls.backend+ApiUrls.restaurant)
    .pipe(catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
  }));
}
  public searchArticles(page,tip,restoran,search,sort){
    let params = new HttpParams();
    params = params.append(ApiUrls.searchQuery[0], page);
    params = params.append(ApiUrls.searchQuery[1], tip);
    params = params.append(ApiUrls.searchQuery[2], search);
    params = params.append(ApiUrls.searchQuery[3], sort);
    params = params.append(ApiUrls.searchQuery[4], restoran);
    return this.httpClient.get<Search>(this.API_URL+ApiUrls.search, {params: params})
    .pipe(catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
  }));
  }

}
