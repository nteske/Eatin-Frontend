import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { ApiUrls } from '../../../core/constants/api-urls';
import { ErrorService } from '../../../core/services/error.service';
import { throwError, from } from 'rxjs';
import { Storage } from '../../../core/constants/storage';
import { PorudzbinaDTO } from '../dto/porudzbinaDTO';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private readonly API_URL = ApiUrls.backend;
////
  constructor(private httpClient: HttpClient, private errorService: ErrorService) { }

  public orderArticle(all){
    var token=localStorage.getItem(Storage.token);
    if(token==null)token="";
    var headers = new HttpHeaders().set('Authorization', token);
    return this.httpClient.post(this.API_URL+ApiUrls.clientOrders, all,{ 'headers': headers })
    .pipe(catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
  }));
  }
  public getOrders(page,status){//.
    let params = new HttpParams();
    params = params.append(ApiUrls.searchQuery[1], page);
    if(status)params = params.append(ApiUrls.searchQuery[7], status);
    var token=localStorage.getItem(Storage.token);
    if(token==null)token="";
    var headers = new HttpHeaders().set('Authorization', token);
    return this.httpClient.get<PorudzbinaDTO>(this.API_URL+ApiUrls.clientOrders,{ 'headers': headers,params: params })
    .pipe(catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
  }));
  }

  public getOrdersToDeliver(page,status){
    let params = new HttpParams();
    params = params.append(ApiUrls.searchQuery[1], page);
    if(status)params = params.append(ApiUrls.searchQuery[7], status);
    var token=localStorage.getItem(Storage.token);
    if(token==null)token="";
    var headers = new HttpHeaders().set('Authorization', token);
    return this.httpClient.get<PorudzbinaDTO>(this.API_URL+ApiUrls.deliveryOrders,{ 'headers': headers,params: params })
    .pipe(catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
  }));
  }

  public getEmployeeOrders(page,status){
    let params = new HttpParams();
    params = params.append(ApiUrls.searchQuery[1], page);
    if(status)params = params.append(ApiUrls.searchQuery[7], status);
    var token=localStorage.getItem(Storage.token);
    if(token==null)token="";
    var headers = new HttpHeaders().set('Authorization', token);
    return this.httpClient.get<PorudzbinaDTO>(this.API_URL+ApiUrls.employeeOrders,{ 'headers': headers,params: params })
    .pipe(catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
  }));
  }

  public putGootovaEmployee(id){
    var token=localStorage.getItem(Storage.token);
    if(token==null)token="";
    var headers = new HttpHeaders().set('Authorization', token);
    return this.httpClient.put(this.API_URL+ApiUrls.employeGotovo+id,{},{ 'headers': headers})
    .pipe(catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
  }));
  }

  public getAvalibeToDeliver(page){
    let params = new HttpParams();
    params = params.append(ApiUrls.searchQuery[1], page);
    var token=localStorage.getItem(Storage.token);
    if(token==null)token="";
    var headers = new HttpHeaders().set('Authorization', token);
    return this.httpClient.get<PorudzbinaDTO>(this.API_URL+ApiUrls.deliveryAvalOrders,{ 'headers': headers,params: params })
    .pipe(catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
  }));
  }

  public putPrihvataDeliver(id){
    var token=localStorage.getItem(Storage.token);
    if(token==null)token="";
    var headers = new HttpHeaders().set('Authorization', token);
    return this.httpClient.put(this.API_URL+ApiUrls.deliveryPrihvata+id,{},{ 'headers': headers})
    .pipe(catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
  }));
  }

  
  public putIsporucujeDeliver(id){
    var token=localStorage.getItem(Storage.token);
    if(token==null)token="";
    var headers = new HttpHeaders().set('Authorization', token);
    return this.httpClient.put(this.API_URL+ApiUrls.deliveryIsporucuje+id,{},{ 'headers': headers})
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
