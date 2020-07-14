import { Injectable } from '@angular/core';
import { ApiUrls } from '../../../core/constants/api-urls';
import { BehaviorSubject, throwError } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ErrorService } from '../../../core/services/error.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Storage } from '../../../core/constants/storage';
import { Register } from '../dto/register';
import { catchError } from 'rxjs/operators';
import { Dostavljac } from '../models/dostavljac.model';
import { Zaposleni } from '../models/zaposleni.model';
import { Admin } from '../models/admin.model';
import { Klijent } from '../models/klijent.model';
import { RestoraniSimple } from '../models/restoraniSimple.model';
import { TipRestorana } from '../../home/models/tip_restorana.model';
import { TipArtikla } from '../../home/models/tip_artikla';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly API_URL = ApiUrls.backend+ApiUrls.korisnici;
  private messageSource = new BehaviorSubject(0);
  currentMessage = this.messageSource.asObservable();

  constructor(public jwtHelper: JwtHelperService, private errorService: ErrorService,private httpClient: HttpClient,private router:Router) { }

  public getRestorani() {
    var token=localStorage.getItem(Storage.token);
    if(token==null)token="";
    var headers = new HttpHeaders().set('Authorization', token);
    return this.httpClient.get<RestoraniSimple[]>('https://eatin-backend.herokuapp.com/restoran-admin', { 'headers': headers })
    .pipe(catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
  }));
  }

  public getKorisnici(uloga: string) {
    let params = new HttpParams();
    params = params.append('uloga', uloga);
    var token=localStorage.getItem(Storage.token);
    if(token==null)token="";
    var headers = new HttpHeaders().set('Authorization', token);
    return this.httpClient.get<Register[]>(this.API_URL, { 'headers': headers, params: params })
    .pipe(catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
  }));
  }

  public getAdmini() {
    var token=localStorage.getItem(Storage.token);
    if(token==null)token="";
    var headers = new HttpHeaders().set('Authorization', token);
    return this.httpClient.get<Admin[]>('https://eatin-backend.herokuapp.com/admin/admin', { 'headers': headers })
    .pipe(catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
    }));
  }

  public getKlijenti() {
    var token=localStorage.getItem(Storage.token);
    if(token==null)token="";
    var headers = new HttpHeaders().set('Authorization', token);
    return this.httpClient.get<Klijent[]>('https://eatin-backend.herokuapp.com/admin/klijent', { 'headers': headers })
    .pipe(catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
    }));
  }

  public getDostavljaci() {
    var token=localStorage.getItem(Storage.token);
    if(token==null)token="";
    var headers = new HttpHeaders().set('Authorization', token);
    return this.httpClient.get<Dostavljac[]>('https://eatin-backend.herokuapp.com/admin/dostavljac', { 'headers': headers })
    .pipe(catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
    }));
  }

  public getZaposleni() {
    var token=localStorage.getItem(Storage.token);
    if(token==null)token="";
    var headers = new HttpHeaders().set('Authorization', token);
    return this.httpClient.get<Zaposleni[]>('https://eatin-backend.herokuapp.com/admin/zaposleni', { 'headers': headers })
    .pipe(catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
    }));
  }

  public registerAdmin(admin: Admin) {
    var token=localStorage.getItem(Storage.token);
    if(token==null)token="";
    var headers = new HttpHeaders().set('Authorization', token);
    return this.httpClient.post('https://eatin-backend.herokuapp.com/admin/register/admin', admin, { headers: headers, responseType: 'text' } )
    .pipe(catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
    }));
  }

  public registerDostavljac(dostavljac: Dostavljac) {
    var token=localStorage.getItem(Storage.token);
    if(token==null)token="";
    var headers = new HttpHeaders().set('Authorization', token);
    return this.httpClient.post('https://eatin-backend.herokuapp.com/admin/register/dostavljac', dostavljac, { headers: headers, responseType: 'text' } )
    .pipe(catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
    }));
  }

  public registerZaposleni(zaposleni: Zaposleni) {
    var token=localStorage.getItem(Storage.token);
    if(token==null)token="";
    var headers = new HttpHeaders().set('Authorization', token);
    return this.httpClient.post('https://eatin-backend.herokuapp.com/admin/register/zaposleni', zaposleni, { headers: headers, responseType: 'text' } )
    .pipe(catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
    }));
  }

  public updateDostavljac(dostavljac: Dostavljac) {
    var token=localStorage.getItem(Storage.token);
    if(token==null)token="";
    var headers = new HttpHeaders().set('Authorization', token);
    return this.httpClient.put('https://eatin-backend.herokuapp.com/admin/update/dostavljac/' + dostavljac.idDostavljaca, dostavljac, { headers: headers, responseType: 'text' } )
    .pipe(catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
    }));
  }

  public updateAdmin(admin: Admin) {
    var token=localStorage.getItem(Storage.token);
    if(token==null)token="";
    var headers = new HttpHeaders().set('Authorization', token);
    return this.httpClient.put('https://eatin-backend.herokuapp.com/admin/update/admin/' + admin.idKorisnika, admin, { headers: headers, responseType: 'text' } )
    .pipe(catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
    }));
  }

  public updateKlijent(klijent: Klijent) {
    var token=localStorage.getItem(Storage.token);
    if(token==null)token="";
    var headers = new HttpHeaders().set('Authorization', token);
    return this.httpClient.put('https://eatin-backend.herokuapp.com/admin/update/klijent/' + klijent.idKorisnika, klijent, { headers: headers, responseType: 'text' } )
    .pipe(catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
    }));
  }

  public updateZaposleni(zaposleni: Zaposleni) {
    var token=localStorage.getItem(Storage.token);
    if(token==null)token="";
    var headers = new HttpHeaders().set('Authorization', token);
    return this.httpClient.put('https://eatin-backend.herokuapp.com/admin/update/zaposleni/' + zaposleni.idZaposlenog, zaposleni, { headers: headers, responseType: 'text' } )
    .pipe(catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
    }));
  }

  public deleteUser(id: number) {
    var token=localStorage.getItem(Storage.token);
    if(token==null)token="";
    var headers = new HttpHeaders().set('Authorization', token);
    return this.httpClient.delete('https://eatin-backend.herokuapp.com/admin/delete/korisnici/' + id, { headers: headers, responseType: 'text' } )
    .pipe(catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
    }));
  }

  public postTipRestoran(tipRestorana: TipRestorana) {
    var token=localStorage.getItem(Storage.token);
    if(token==null)token="";
    var headers = new HttpHeaders().set('Authorization', token);
    return this.httpClient.post('https://eatin-backend.herokuapp.com/tip-restorana-admin', tipRestorana, { headers: headers, responseType: 'text' } )
    .pipe(catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
    }));
  }

  public putTipRestoran(tipRestorana: TipRestorana) {
    var token=localStorage.getItem(Storage.token);
    if(token==null)token="";
    var headers = new HttpHeaders().set('Authorization', token);
    return this.httpClient.put('https://eatin-backend.herokuapp.com/tip-restorana-admin', tipRestorana, { headers: headers, responseType: 'text' } )
    .pipe(catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
    }));
  }

  public postTipArtikla(tipArtikla: TipArtikla) {
    var token=localStorage.getItem(Storage.token);
    if(token==null)token="";
    var headers = new HttpHeaders().set('Authorization', token);
    return this.httpClient.post('https://eatin-backend.herokuapp.com/tip-artikla-admin', tipArtikla, { headers: headers, responseType: 'text' } )
    .pipe(catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
    }));
  }

  public putTipArtikla(tipArtikla: TipArtikla) {
    var token=localStorage.getItem(Storage.token);
    if(token==null)token="";
    var headers = new HttpHeaders().set('Authorization', token);
    return this.httpClient.put('https://eatin-backend.herokuapp.com/tip-artikla-admin', tipArtikla, { headers: headers, responseType: 'text' } )
    .pipe(catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
    }));
  }
}
