import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { ApiUrls } from '../../../core/constants/api-urls';
import { ErrorService } from '../../../core/services/error.service';
import { throwError, from } from 'rxjs';
import { Tipizirano } from '../dto/tipizirano';
import { Restoran } from '../models/restoran.model';
import { Search } from '../dto/search';

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
  public getAllRestourants() {
    return this.httpClient.get<Restoran[]>(ApiUrls.backend+ApiUrls.restaurant)
    .pipe(catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
  }));
}
  public searchArticles(page,tip,restoran,search){
    let params = new HttpParams();
    params = params.append('page', page);
    params = params.append('type', tip);
    params = params.append('restaurant', restoran);
    params = params.append('search', search);
    return this.httpClient.get<Search>(this.API_URL+ApiUrls.search, {params: params})
    .pipe(catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
  }));
  }
}
