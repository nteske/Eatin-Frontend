import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { ApiUrls } from '../../../core/constants/api-urls';
import { ErrorService } from '../../../core/services/error.service';
import { throwError, from } from 'rxjs';
import { Storage } from '../../../core/constants/storage';
import { Porudzbina } from '../dto/porudzbina';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private readonly API_URL = ApiUrls.backend+ApiUrls.orders;

  constructor(private httpClient: HttpClient, private errorService: ErrorService) { }

  public orderArticle(all){
    const headers = new HttpHeaders;
    headers.set("Authorization", localStorage.getItem(Storage.token));
    return this.httpClient.post(this.API_URL, all,{ headers: headers })
    .pipe(catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
  }));
  }
  public getOrders(){
    const headers = new HttpHeaders;
    headers.set("Authorization", localStorage.getItem(Storage.token));
    return this.httpClient.get<Porudzbina[]>(this.API_URL+ApiUrls.userOrd,{ headers: headers })
    .pipe(catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
  }));
  }

  public getOrdersToDeliver(){
    const headers = new HttpHeaders;
    headers.set("Authorization", localStorage.getItem(Storage.token));
    return this.httpClient.get<Porudzbina[]>(this.API_URL+ApiUrls.deliveryOrd,{ headers: headers })
    .pipe(catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
  }));
  }

  public acceptOrder(num){
    const headers = new HttpHeaders;
    headers.set("Authorization", localStorage.getItem(Storage.token));
    var body={prihvatio:num};
    return this.httpClient.post(this.API_URL+ApiUrls.accept,body,{ headers: headers })
    .pipe(catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
  }));
  }
}
