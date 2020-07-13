import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { ApiUrls } from '../../../core/constants/api-urls';
import { ErrorService } from '../../../core/services/error.service';
import { Storage } from 'src/app/core/constants/storage';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Restoran } from '../../home/models/restoran.model';
import { TipDatuma } from '../models/tipDatuma.model';
import { Prilog } from '../../home/models/prilog.model';
import { Mera } from '../../home/models/mera.model';

@Injectable({
  providedIn: 'root'
})
export class ZaposleniArtikliService {
  private readonly API_URL = ApiUrls.backend;
////
  constructor(private httpClient: HttpClient, private errorService: ErrorService) { }

  public getRestoran(){
    var token=localStorage.getItem(Storage.token);
    if(token==null)token="";
    var headers = new HttpHeaders().set('Authorization', token);
    return this.httpClient.get<Restoran>(this.API_URL+ApiUrls.zaposleniRestoran,{ 'headers': headers })
    .pipe(catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
  }));
  }

  public getTipoveDatuma(){
    var token=localStorage.getItem(Storage.token);
    if(token==null)token="";
    var headers = new HttpHeaders().set('Authorization', token);
    return this.httpClient.get<TipDatuma[]>(this.API_URL+ApiUrls.zaposleniTipDatuma,{ 'headers': headers })
    .pipe(catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
  }));
  }

  public getPrilog(){
    var token=localStorage.getItem(Storage.token);
    if(token==null)token="";
    var headers = new HttpHeaders().set('Authorization', token);
    return this.httpClient.get<Prilog[]>(this.API_URL+ApiUrls.prilog,{ 'headers': headers })
    .pipe(catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
  }));
  }

  public getMera(){
    var token=localStorage.getItem(Storage.token);
    if(token==null)token="";
    var headers = new HttpHeaders().set('Authorization', token);
    return this.httpClient.get<Mera[]>(this.API_URL+ApiUrls.mera,{ 'headers': headers })
    .pipe(catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
  }));
  }


  public putRestoran(data){
    var token=localStorage.getItem(Storage.token);
    if(token==null)token="";
    var headers = new HttpHeaders().set('Authorization', token);
    return this.httpClient.put(this.API_URL+ApiUrls.zaposleniRestoran,data,{ 'headers': headers })
    .pipe(catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
  }));
  }

  public postRestoranVreme(data){
    var token=localStorage.getItem(Storage.token);
    if(token==null)token="";
    var headers = new HttpHeaders().set('Authorization', token);
    return this.httpClient.post(this.API_URL+ApiUrls.zaposleniVreme,data,{ 'headers': headers })
    .pipe(catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
  }));
  }

  public deleteRestoranVreme(num){
    var token=localStorage.getItem(Storage.token);
    if(token==null)token="";
    var headers = new HttpHeaders().set('Authorization', token);
    return this.httpClient.delete(this.API_URL+ApiUrls.zaposleniVreme+'/'+num,{ 'headers': headers })
    .pipe(catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
  }));
  }

  public postRestoranLokacije(data){
    var token=localStorage.getItem(Storage.token);
    if(token==null)token="";
    var headers = new HttpHeaders().set('Authorization', token);
    return this.httpClient.post(this.API_URL+ApiUrls.zaposleniLokacije,data,{ 'headers': headers })
    .pipe(catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
  }));
  }

  public posArtikl(data){
    var token=localStorage.getItem(Storage.token);
    if(token==null)token="";
    var headers = new HttpHeaders().set('Authorization', token);
    return this.httpClient.post(this.API_URL+ApiUrls.zaposleniArtikli,data,{ 'headers': headers })
    .pipe(catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
  }));
  }


  public putArtikl(data,num){
    var token=localStorage.getItem(Storage.token);
    if(token==null)token="";
    var headers = new HttpHeaders().set('Authorization', token);
    return this.httpClient.put(this.API_URL+ApiUrls.zaposleniArtikli+"/"+num,data,{ 'headers': headers })
    .pipe(catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
  }));
  }

  public deleteRestoranLokacije(num){
    var token=localStorage.getItem(Storage.token);
    if(token==null)token="";
    var headers = new HttpHeaders().set('Authorization', token);
    return this.httpClient.delete(this.API_URL+ApiUrls.zaposleniLokacije+'/'+num,{ 'headers': headers })
    .pipe(catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
  }));
  }



  public postTipRestoran(data){
    var token=localStorage.getItem(Storage.token);
    if(token==null)token="";
    var headers = new HttpHeaders().set('Authorization', token);
    return this.httpClient.post(this.API_URL+ApiUrls.zaposleniRestoranTip,data,{ 'headers': headers })
    .pipe(catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
  }));
  }

  public deleteTipRestoran(num){
    var token=localStorage.getItem(Storage.token);
    if(token==null)token="";
    var headers = new HttpHeaders().set('Authorization', token);
    return this.httpClient.delete(this.API_URL+ApiUrls.zaposleniRestoranTip+'/'+num,{ 'headers': headers })
    .pipe(catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
  }));
  }



  public postArtiklPrilog(data,artiklId){
    var token=localStorage.getItem(Storage.token);
    if(token==null)token="";
    var headers = new HttpHeaders().set('Authorization', token);
    return this.httpClient.post(this.API_URL+ApiUrls.zaposleniPrilog+'/'+artiklId,data,{ 'headers': headers })
    .pipe(catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
  }));
  }

  public deleteArtiklPrilog(idArtikla ,idPriloga){
    let params = new HttpParams();
    params = params.append("idArtikla", idArtikla);
    params = params.append("idPriloga", idPriloga);

    var token=localStorage.getItem(Storage.token);
    if(token==null)token="";
    var headers = new HttpHeaders().set('Authorization', token);

    return this.httpClient.delete(this.API_URL+ApiUrls.zaposleniPrilog,  { 'headers': headers,params: params })
    .pipe(catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
  }));
  }

  public postArtiklMera(data,artiklId){
    var token=localStorage.getItem(Storage.token);
    if(token==null)token="";
    var headers = new HttpHeaders().set('Authorization', token);
    return this.httpClient.post(this.API_URL+ApiUrls.zaposleniMera+'/'+artiklId,data,{ 'headers': headers })
    .pipe(catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
  }));
  }

  public deleteArtiklMera(idArtikla ,idMere ){
    let params = new HttpParams();
    params = params.append("idArtikla", idArtikla);
    params = params.append("idMere", idMere );

    var token=localStorage.getItem(Storage.token);
    if(token==null)token="";
    var headers = new HttpHeaders().set('Authorization', token);

    return this.httpClient.delete(this.API_URL+ApiUrls.zaposleniMera,  { 'headers': headers,params: params })
    .pipe(catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
  }));
  }

}
