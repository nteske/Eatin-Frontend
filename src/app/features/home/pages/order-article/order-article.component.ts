import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,ParamMap } from '@angular/router';
import { ArticlesDisplayService } from '../../services/articles-display.service';
import { Artikl } from '../../models/artikl.model';
import { ApiUrls } from 'src/app/core/constants/api-urls';
import { BasketService } from '../../../../core/services/basket.service';

import { Roles } from '../../../../core/constants/roles';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../user/services/auth.service';
import { RestoranService } from '../../services/restoran.service';
import { ArtiklPorudzbinaDTO } from '../../dto/artiklPorudzbinaDTO';
import { TipArtikla } from '../../models/tip_artikla';

@Component({
  selector: 'app-order-article',
  templateUrl: './order-article.component.html',
  styleUrls: ['./order-article.component.css']
})
export class OrderArticleComponent implements OnInit {
  public taken;
  public loaded=false;
  public artikl:Artikl;
  public biraPrilog;
  public biraMeru;
  public kolicina;
  public tipovi:TipArtikla[];
  public user=Roles.user;
  constructor(private restoranService:RestoranService,private authService:AuthService,private router: Router,private route: ActivatedRoute,private articleDisplayService:ArticlesDisplayService,
    private baskerService:BasketService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap) => {
      this.taken = params.get('id');
        this.articleDisplayService.getArtikl(this.taken).subscribe(data=>{
          this.biraMeru=data.mere;
          this.artikl=data;
          this.kolicina=data.mere[0].idMere;
          let niz=JSON.parse(JSON.stringify(data.prilozi));
          this.biraPrilog=niz.map(item=>{item.stanje=false; return item;});
          this.loaded=true;
        });
      });

      this.restoranService.getTipoveArtikala().subscribe(data=>{
        this.tipovi=data;
      });
  }
  getRole():string{
    return this.authService.getRole();
  }
  getMyImage(text):string{
    return ApiUrls.getImageUrl(text);
  }
  convert(art:Artikl):ArtiklPorudzbinaDTO{
    var s=new ArtiklPorudzbinaDTO();
    s.idArtikla=art.idArtikla;
    s.restoranId=art.restoranId;
    s.tipArtikla=this.tipovi.find(el=>el.idTipaArtikla=art.tipArtiklaId);
    s.nazivArtikla=art.nazivArtikla;
    s.slikaArtikla=art.slikaArtikla;
    s.cenaArtikla=art.cenaArtikla;
    return s;
  }
  dodaje():void{
    if(this.user==this.getRole()){
    var prilog=this.biraPrilog.filter(item=>item.stanje)
      .map(item=>
        {
          item={idImaPriloge:0,prilog:{idPriloga:item.idPriloga,nazivPriloga:item.nazivPriloga}}; 
        return item
       })
      //}
    var zaKorpu={artikl:this.convert(this.artikl),
      idStavkePorudzbine:0,
      imaPriloge:prilog,
      mera:this.biraMeru.find(item=>this.kolicina==item.idMere)
    };//
    if(this.baskerService.addToBasket(zaKorpu)){
      this.toastr.success("Uspesno ste dodali u korpu!","Uspeh",{
        closeButton:true,
        positionClass:'toast-bottom-right'
      });
    }
    this.biraPrilog=this.biraPrilog.map(item=>{item.stanje=false;return item;});
    this.kolicina=this.biraMeru[0].idMere;
  }
  }
}
