import { Component, OnInit, Input } from '@angular/core';
import { Artikl } from '../../models/artikl.model';
import { ApiUrls } from 'src/app/core/constants/api-urls';
import { Router } from '@angular/router';
import { rootPaths } from '../../../../core/constants/root-paths';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  @Input() article:Artikl;
  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  getMyImage(text):string{
    return ApiUrls.getImageUrl(text);
  }

  naMene(num):void{
    let broj=Number(num);
    this.router.navigate([]).then(result => {  window.open(rootPaths.article+'/'+broj, '_blank'); });
    //this.router.navigateByUrl(rootPaths.article+'/'+broj);
  }

}
