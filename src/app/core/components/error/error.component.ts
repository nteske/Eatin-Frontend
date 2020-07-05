import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//servisi
import { ErrorService } from '../../services/error.service';
import { ToastrService } from 'ngx-toastr';
//modeli
import { Error } from '../../models/error.model';

@Component({
  selector: 'app-error',
  template: ``,
  styles: [
  ]
})
export class ErrorComponent implements OnInit {

  constructor(private router: Router,private errorService: ErrorService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.errorService.errorOccurred
    .subscribe(
        (error: Error) => {
          /************Rukovanje pristiglim greskama************/
          let msg=error.message;
          let status=parseInt(error.title);
          if(status==0)msg="Failed to connect to the server!";
          else if(status==400&&msg=="OK")msg="User already exists!";
          else if(status==401) msg="Please sing in first!";
          else if(status==403) msg="Restricted!";
          else if(status==404) msg="Server can't find a route!";
          else if(status==500) msg="Server error!";
          if (status != 200) {
            this.toastr.error(msg,"Error",{
              closeButton:true,
              timeOut: 10000,
              positionClass:'toast-bottom-right'
            });
          } /*else {
            this.toastr.success("Aktivirajte nalog pomoću email poruke koju smo Vam poslali","Uspeh",{
              closeButton:true,
              positionClass:'toast-bottom-right'
            });
          }*/
        }
    );
  }

}
