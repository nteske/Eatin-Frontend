import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public nalog=false;
  public prijava=false;

  constructor(private authService:AuthService) { 
  }

  ngOnInit(): void {
    this.projavaProvera();
  }

  projavaProvera(): void{
    this.prijava=this.authService.isLoggedIn();
  }

  postavke(unos):void{
    this.nalog=unos;
  }

}
