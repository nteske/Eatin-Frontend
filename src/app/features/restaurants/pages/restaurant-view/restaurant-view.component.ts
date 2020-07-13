import { Component, OnInit } from '@angular/core';
import { ZaposleniArtikliService } from '../../services/zaposleni-artikli.service';
import { ApiUrls } from 'src/app/core/constants/api-urls';
import { Restoran } from 'src/app/features/home/models/restoran.model';
import { TipRestorana } from 'src/app/features/home/models/tip_restorana.model';
import { RestoranService } from 'src/app/features/home/services/restoran.service';
import { TipDatuma } from '../../models/tipDatuma.model';
import { Vreme } from '../../models/vreme.model';
import { Lokacija } from 'src/app/features/home/models/lokacija.model';
import { Router } from '@angular/router';
import { rootPaths } from 'src/app/core/constants/root-paths';

@Component({
  selector: 'app-restaurant-view',
  templateUrl: './restaurant-view.component.html',
  styleUrls: ['./restaurant-view.component.css']
})
export class RestaurantViewComponent implements OnInit {
  restoran:Restoran;
  ucitao=false;
  menja=false;

  public tipovi:TipRestorana[];
  public odabraoTip;

  public vremeOd;
  public vremeDo;

  public tipoviDatuma:TipDatuma[];
  public odabraoTipDatuma;
  public lokacija:Lokacija=new Lokacija();
  constructor(private router:Router,private restoranService:RestoranService,private zaposleniArtikliService:ZaposleniArtikliService) { }

  ngOnInit(): void {
    this.zaposleniArtikliService.getRestoran().subscribe(data=>{
        this.restoran=data;
        this.lokacija.postanskiBroj="";
        this.lokacija.grad="";
        this.lokacija.ulica="";
        this.lokacija.broj="";
        this.restoran.radnoVreme=this.restoran.radnoVreme.map(el=>
          {
            el.vremeOd=el.vremeOd.split(':')[0];
            el.vremeDo=el.vremeDo.split(':')[0];
            return el;
      })
        this.ucitajTipove();
        this.ucitajDatume();
        this.ucitao=true;
    });
  }

  getMyImage(text):string{
    return ApiUrls.getImageUrl(text);
  }

  izmena(){
    if(this.menja&&this.restoran.nazivRestorana.length>0
      &&this.restoran.nazivRestorana.length<50
      &&this.restoran.opisRestorana.length<200
      &&this.restoran.pibRestorana.length==9 
      &&this.restoran.slikaRestorana.length>0 
      &&this.restoran.slikaRestorana.length<200 
      &&this.restoran.telefonRestorana.length>0 
      &&this.restoran.telefonRestorana.length<15){

      let obj={
      "nazivRestorana": this.restoran.nazivRestorana,
      "opisRestorana":  this.restoran.opisRestorana,
      "pibRestorana":  this.restoran.pibRestorana,
      "slikaRestorana":  this.restoran.slikaRestorana,
      "telefonRestorana":  this.restoran.telefonRestorana
    };
      this.zaposleniArtikliService.putRestoran(obj).subscribe();
    }
    this.menja=!this.menja;
  }

  ucitajTipove(){
    this.restoranService.getTipoveRestorana().subscribe(data=>{
      this.tipovi=data.filter(el=>{
        let s=true;
        this.restoran.tipRestorana.forEach(function(item) {
          if(item.idTipaRestorana==el.idTipaRestorana)
          s=false;
        })
        return s;
      }
      );
      if(this.tipovi.length==0)this.tipovi=[{idTipaRestorana:-1,opisTipaRestorana:"Nema vise tipova"}]
      this.odabraoTip=this.tipovi[0].idTipaRestorana;
    });
  }

  ucitajDatume(){
    this.zaposleniArtikliService.getTipoveDatuma().subscribe(data=>{
        this.tipoviDatuma=data.filter(el=>{
          let s=true;
          this.restoran.radnoVreme.forEach(function(item) {
            if(item.tipDatuma.idTipaDatuma==el.idTipaDatuma)
            s=false;
          })
          return s;
        }
        );
        if(this.tipoviDatuma.length==0)this.tipoviDatuma=[{idTipaDatuma:-1,opisTipaDatuma:"Nema vise tipova datuma"}]
        this.odabraoTipDatuma=this.tipoviDatuma[0].idTipaDatuma;
    });
  }
  promena():void{
//
  }

  obrisiLokaciju(num):void{
    this.restoran.lokacije=this.restoran.lokacije.filter(el=>el.idLokacije!=num)
    this.zaposleniArtikliService.deleteRestoranLokacije(num).subscribe();
  }

  dodajLokaciju():void{
    if(this.lokacija.postanskiBroj.length==5
      &&this.lokacija.grad.length>0
      &&this.lokacija.grad.length<21
      &&this.lokacija.ulica.length>0
      &&this.lokacija.ulica.length<31
      &&this.lokacija.broj.length>0
      &&this.lokacija.broj.length<1001
      &&this.lokacija.latitude>10
      &&this.lokacija.longitude>10){
        this.restoran.lokacije.push(this.lokacija);
        this.zaposleniArtikliService.postRestoranLokacije(this.lokacija).subscribe();
      }
  }

  obrisiVreme(num){
    this.tipoviDatuma=this.tipoviDatuma.filter(el=>el.idTipaDatuma!=-1);
    this.tipoviDatuma.push(this.restoran.radnoVreme.find(el=>el.tipDatuma.idTipaDatuma==num).tipDatuma);
    this.odabraoTipDatuma=this.tipoviDatuma[0].idTipaDatuma;
    this.restoran.radnoVreme=this.restoran.radnoVreme.filter(el=>el.tipDatuma.idTipaDatuma!=num);
    this.zaposleniArtikliService.deleteRestoranVreme(num).subscribe();
  }

  dodajVreme(){
    if(this.vremeOd==undefined||this.vremeDo==undefined||this.vremeOd<0||this.vremeDo>24||this.vremeDo<this.vremeOd||this.odabraoTipDatuma==-1){

    }else {
      let data:Vreme={tipDatuma:this.tipoviDatuma.find(el=>el.idTipaDatuma==this.odabraoTipDatuma),vremeDo:this.vremeDo,vremeOd:this.vremeOd}
      this.restoran.radnoVreme.push(data);
      this.tipoviDatuma=this.tipoviDatuma.filter(el=>el.idTipaDatuma!=data.tipDatuma.idTipaDatuma);
      if(this.tipoviDatuma.length==0)this.tipoviDatuma=[{idTipaDatuma:-1,opisTipaDatuma:"Nema vise tipova datuma"}]
      this.odabraoTipDatuma=this.tipoviDatuma[0].idTipaDatuma;
      this.vremeOd=undefined;
      this.vremeDo=undefined;
      data.vremeOd=data.vremeOd+":00";
      data.vremeDo=data.vremeDo+":00";
      this.zaposleniArtikliService.postRestoranVreme(data).subscribe();
      data.vremeOd=data.vremeOd.split(':')[0];
      data.vremeDo=data.vremeDo.split(':')[0];
    }
  }
  obrisiMe(num){
    this.tipovi=this.tipovi.filter(el=>el.idTipaRestorana!=-1);
    this.tipovi.push(this.restoran.tipRestorana.find(el=>el.idTipaRestorana==num));
    this.odabraoTip=this.tipovi[0].idTipaRestorana;
    this.restoran.tipRestorana=this.restoran.tipRestorana.filter(el=>el.idTipaRestorana!=num);
    this.zaposleniArtikliService.deleteTipRestoran(num).subscribe();
  }
  dodaj(){
    if(this.odabraoTip!=-1){
    let data:TipRestorana=this.tipovi.find(el=>el.idTipaRestorana==this.odabraoTip);

    this.restoran.tipRestorana.push(data);
    this.tipovi=this.tipovi.filter(el=>el.idTipaRestorana!=data.idTipaRestorana);
    if(this.tipovi.length==0)this.tipovi=[{idTipaRestorana:-1,opisTipaRestorana:"Nema vise tipova"}]
    this.odabraoTip=this.tipovi[0].idTipaRestorana;
    this.zaposleniArtikliService.postTipRestoran(data).subscribe();
  }
}
upravljajArtiklima(){
  this.router.navigateByUrl(rootPaths.restaurants+'/'+rootPaths.articlesView)
}

kordinate(ev){
  this.lokacija.latitude=ev.lat;
  this.lokacija.longitude=ev.lng;
}
}
