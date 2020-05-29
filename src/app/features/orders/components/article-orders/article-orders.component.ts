import { Component, OnInit, Input } from '@angular/core';
import { ApiUrls } from '../../../../core/constants/api-urls';

@Component({
  selector: 'app-article-orders',
  templateUrl: './article-orders.component.html',
  styleUrls: ['./article-orders.component.css']
})
export class ArticleOrdersComponent implements OnInit {
  @Input() article;//
  constructor() { }
  ngOnInit(): void {
  }
  getMyImage(text){
    return ApiUrls.getImageUrl(text);
  }
}
