import { Component, OnInit,Input,OnChanges,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {
  @Input() paginator: number;//broj stranica
  @Output() promena = new EventEmitter();

  place: number=1;//broj na kojoj je stranici
  pagginationList:string[]=[];

  constructor() { }

  ngOnInit(): void {
    this.makePagination();
  }
  ngOnChanges(){
    this.place=1;
    this.pagginationList=[];
    this.makePagination();
  }
  goLeft(){if(this.place!=1){this.place=this.place-1;this.promena.emit(this.place);this.makePagination();}}
  goRight(){if(this.place!=this.paginator){this.place=this.place+1;this.promena.emit(this.place);this.makePagination();}}

  setMe(num){
    if(num!='..'){
    this.place=num;
    this.promena.emit(this.place);
    if(this.paginator>=6)this.makePagination();
    }
  }
  makePagination(){
    this.pagginationList=[];
    if(this.paginator>1&&this.paginator<6){
        for(var i=1;i<=this.paginator;i++)
          this.pagginationList.push(i.toString());
    }else if(this.paginator>=6){
        if(this.place<3)
        {
          for(var i=1;i<=3;i++)this.pagginationList.push(i.toString());
          this.pagginationList.push('..');
          this.pagginationList.push(this.paginator.toString());
        }else if(this.place>(this.paginator-3))
        {
          this.pagginationList.push('1');
          this.pagginationList.push('..');
          for(var i=this.paginator-3;i<=this.paginator;i++)this.pagginationList.push(i.toString());
        }else{
          this.pagginationList.push('1');
          this.pagginationList.push('..');
          for(var s=(Number(this.place)-1);s<=(Number(this.place)+1);s++)this.pagginationList.push(s.toString());
          this.pagginationList.push('..');
          this.pagginationList.push(this.paginator.toString());
        }
    }
  }

}
