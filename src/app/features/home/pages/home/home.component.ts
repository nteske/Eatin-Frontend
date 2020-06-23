import { Component, OnInit,NgZone ,OnDestroy} from '@angular/core';
import { RestoranService } from '../../services/restoran.service';
import { RestoranDTO } from '../../dto/RestoranDTO';
import { Restoran } from '../../models/restoran.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit,OnDestroy {
  public nalog=false;
  public prijava=false;
  public preuzeto:RestoranDTO;
  public ucitano=false;
  public selektovan=-1;
  public postavljenRestoran;
  public hover=-1;
  images = [
  "../../../../../assets/images/slider1.jpg",
  "../../../../../assets/images/slider2.jpg"
   ];
  constructor(private ngZone: NgZone,  private restoranService:RestoranService) {

  }

  ngOnInit(): void {
    window['angularComponentReference'] = { component: this, zone: this.ngZone, loadAngularFunction: (restoran,state) => this.pozivIzMape(restoran,state), };
    this.uzmiRestorane('false','1','ID',-1);
  }
  ngOnDestroy() {
    window['angularComponentReference']= null;
  }

/*
  projavaProvera(): void{
    this.prijava=this.authService.isLoggedIn();
  }*/

  postavke(unos):void{
    this.nalog=unos;
  }
//
  poziv(ev){
    this.uzmiRestorane(ev.desceding,ev.page,ev.sort,ev.odabraoTip);
  }
  pozivIzMape(ev,state){//state 0 klinuo baloncic, 1 naslonio misa na njega, 2 sklonio misa s njega
    if(state==0){
      if(this.selektovan==Number(ev))this.selektovan=-1;
      else{this.postavljenRestoran=this.preuzeto.content.find(el=>el.idRestorana==ev); this.selektovan=ev;}
    }
    if(state==1)this.hover=ev;
    else this.hover=-1;
  }
  odabrao(ev){
    this.postavljenRestoran=this.preuzeto.content.find(el=>el.idRestorana==ev); 
    this.selektovan=ev;
  }

  uzmiRestorane(desceding,page,sort,tip){
    this.selektovan=-1;
    this.restoranService.getRestorane(desceding,page,sort,tip).subscribe(data=>{
        this.preuzeto=data;
        this.ucitano=true;
    });
  }

}
