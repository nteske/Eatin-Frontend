import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArticlesDisplayService } from 'src/app/features/home/services/articles-display.service';
import { Artikl } from 'src/app/features/home/models/artikl.model';
import { Prilog } from 'src/app/features/home/models/prilog.model';
import { Mera } from 'src/app/features/home/models/mera.model';
import { ZaposleniArtikliService } from '../../services/zaposleni-artikli.service';

@Component({
  selector: 'app-prilozi-i-mere',
  templateUrl: './prilozi-i-mere.component.html',
  styleUrls: ['./prilozi-i-mere.component.css']
})
export class PriloziIMereComponent implements OnInit {
  public artikl:Artikl;
  ucitano=false;
  prilozi:Prilog[];
  mera:Mera[];
  odabraoPrilog;
  odabraoMeru;
  constructor(    public dialogRef: MatDialogRef<PriloziIMereComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private articleDisplayService:ArticlesDisplayService,
    private zaposleniArtikliService:ZaposleniArtikliService) { }

  ngOnInit(): void {
    this.articleDisplayService.getArtikl(this.data.id).subscribe(data=>{
      this.artikl=data;
      //console.log(this.artikl.prilozi);
      this.ucitajPrilogeIMere();
      this.ucitano=true;
    });
  }
  ucitajPrilogeIMere(){
    this.zaposleniArtikliService.getPrilog().subscribe(data=>{
      this.prilozi=data.filter(el=>{
        let s=true;
        this.artikl.prilozi.forEach(function(item) {
          if(item.idPriloga==el.idPriloga)
          s=false;
        })
        return s;
      });
    if(this.prilozi.length==0)this.prilozi=[{idPriloga:-1,nazivPriloga:"Nema vise priloga"}]
    this.odabraoPrilog=this.prilozi[0].idPriloga;
  });
    this.zaposleniArtikliService.getMera().subscribe(data=>{
      this.mera=data.filter(el=>{
        let s=true;
        this.artikl.mere.forEach(function(item) {
          if(item.idMere==el.idMere)
          s=false;
        })
        return s;
      });
      if(this.mera.length==0)this.mera=[{idMere:-1,opisMere:"Nema vise mera"}]
    this.odabraoMeru=this.mera[0].idMere;
  });
  }
  dodajPrilog(){
    if(this.odabraoPrilog!=-1){
      let data:Prilog=this.prilozi.find(el=>el.idPriloga==this.odabraoPrilog);
      this.artikl.prilozi.push(data);

      this.prilozi=this.prilozi.filter(el=>el.idPriloga!=data.idPriloga);
      if(this.prilozi.length==0)this.prilozi=[{idPriloga:-1,nazivPriloga:"Nema vise priloga"}]
      this.odabraoPrilog=this.prilozi[0].idPriloga;
      this.zaposleniArtikliService.postArtiklPrilog(data,this.data.id).subscribe();
    }
  }
  dodajMeru(){
    if(this.odabraoMeru!=-1){
      let data:Mera=this.mera.find(el=>el.idMere==this.odabraoMeru);
      this.artikl.mere.push(data);

      this.mera=this.mera.filter(el=>el.idMere!=data.idMere);
      if(this.mera.length==0)this.mera=[{idMere:-1,opisMere:"Nema vise mera"}]
       this.odabraoMeru=this.mera[0].idMere;
      this.zaposleniArtikliService.postArtiklMera(data,this.data.id).subscribe();
    }
  }

  obrisiPrilog(num){
    this.prilozi=this.prilozi.filter(el=>el.idPriloga!=-1);
    this.prilozi.push(this.artikl.prilozi.find(el=>el.idPriloga==num));
    this.odabraoPrilog=this.prilozi[0].idPriloga;
    this.artikl.prilozi=this.artikl.prilozi.filter(el=>el.idPriloga!=num);
    this.zaposleniArtikliService.deleteArtiklPrilog(this.data.id,num).subscribe();
  }

  obrisiMeru(num){
    this.mera=this.mera.filter(el=>el.idMere!=-1);
    this.mera.push(this.artikl.mere.find(el=>el.idMere==num));
    this.odabraoMeru=this.mera[0].idMere;
    this.artikl.mere=this.artikl.mere.filter(el=>el.idMere!=num);
    this.zaposleniArtikliService.deleteArtiklMera(this.data.id,num).subscribe();
  }

}
