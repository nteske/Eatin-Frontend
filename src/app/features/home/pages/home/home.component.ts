import { Component, OnInit } from '@angular/core';
import { RestoranService } from '../../services/restoran.service';
import { RestoranDTO } from '../../dto/RestoranDTO';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  public nalog=false;
  public prijava=false;
  public preuzeto:RestoranDTO;
  public ucitano=false;
  images = [
  "../../../../../assets/images/slider1.jpg",
  "../../../../../assets/images/slider2.jpg"
   ];
  constructor(private restoranService:RestoranService) {

  }

  ngOnInit(): void {
     // this.projavaProvera();
    this.uzmiRestorane();
  }
/*
  projavaProvera(): void{
    this.prijava=this.authService.isLoggedIn();
  }*/

  postavke(unos):void{
    this.nalog=unos;
  }

  uzmiRestorane(){
    this.restoranService.getRestorane().subscribe(data=>{
        this.preuzeto=data;
        this.ucitano=true;
    });
  }

}
