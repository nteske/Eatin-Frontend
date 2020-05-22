import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//servisi
import { ErrorService } from '../../constants/error.service';
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
          if(status==0)msg="Failed to connect to server";
          if(status==401) msg="Please login first!";
          if(status==403) msg="Restricted!";
          if(status==500) this.router.navigate(['/']);
          this.toastr.error(msg,"Error",{
            closeButton:true,
            positionClass:'toast-bottom-right'
          });
        }
    );
  }

}
