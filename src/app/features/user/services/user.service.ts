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



@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly API_URL = ApiUrls.backend+ApiUrls.korisnici;
  private messageSource = new BehaviorSubject(0);
  currentMessage = this.messageSource.asObservable();

  constructor(public jwtHelper: JwtHelperService, private errorService: ErrorService,private httpClient: HttpClient,private router:Router) { }

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

  public registerAdmin(admin: Register) {
    var token=localStorage.getItem(Storage.token);
    if(token==null)token="";
    var headers = new HttpHeaders().set('Authorization', token);
    return this.httpClient.post('https://eatin-backend.herokuapp.com/admin/register/admin', admin, { headers: headers, responseType: 'text' } )
    .pipe(catchError((error: Response) => {
      this.errorService.handleError(error);
      return throwError(error);
    }));
  }

}
