import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostRestoran } from '../../models/postResotan.model';
import { RestoranService } from '../../../home/services/restoran.service';
import { TipRestorana } from '../../../home/models/tip_restorana.model';
import { ToastrService } from 'ngx-toastr';
import { LokacijaAdmin } from '../../models/lokacijaAdmin.model';
import { ZaposleniArtikliService } from '../../../restaurants/services/zaposleni-artikli.service';
import { TipDatuma } from '../../../restaurants/models/tipDatuma.model';
import { TipDatumaPost } from '../../models/tipDatumaPost.model';

@Component({
  selector: 'app-restaurant-admin',
  templateUrl: './restaurant-admin.component.html',
  styleUrls: ['./restaurant-admin.component.css']
})
export class RestaurantAdminComponent implements OnInit {

  @ViewChildren('checkboxes') private checkboxes: QueryList<any>;

  form: FormGroup;
  formLokacija: FormGroup;
  tipoviRestorana: TipRestorana[];
  odabraniTipoviRestorana: TipRestorana[] = [];
  lokacije: LokacijaAdmin[] = [];
  tipoviDatuma: TipDatuma[] = [];

  constructor(private restoranService: RestoranService,
              private zaposleniArtikliService: ZaposleniArtikliService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.formLokacija = new FormGroup({
      ulica: new FormControl(null, [Validators.required,Validators.minLength(4)]),
      broj: new FormControl(null, [Validators.required,Validators.minLength(1)]),
      grad: new FormControl(null, [Validators.required,Validators.minLength(2)]),
      pBroj: new FormControl(null, [Validators.required,Validators.minLength(5),Validators.maxLength(5)]),
      latitude: new FormControl(null,[Validators.required]),
      longitude: new FormControl(null,[Validators.required])
    });

    this.form = new FormGroup({
      nazivRestorana: new FormControl(null, [Validators.required,Validators.minLength(2)]),
      opisRestorana: new FormControl(null, [Validators.required,Validators.minLength(2)]),
      telefonRestorana: new FormControl(null, [Validators.required,Validators.minLength(2)]),
      slikaRestorana: new FormControl(null, [Validators.required,Validators.minLength(2)]),
      pibRestorana: new FormControl(null, [Validators.required,Validators.minLength(9),Validators.maxLength(9)]),
    });

    this.restoranService.getTipoveRestorana().subscribe({
      next: data => {
        this.tipoviRestorana = data;
      }
    });

    this.zaposleniArtikliService.getTipoveDatuma().subscribe({
      next: data => {
        this.tipoviDatuma = data;
      }
    });
  }

  promena(tip: TipRestorana) {
    if (this.odabraniTipoviRestorana.some(e => e.idTipaRestorana === tip.idTipaRestorana)) {
      this.odabraniTipoviRestorana.splice(this.odabraniTipoviRestorana.findIndex(item => item.idTipaRestorana === tip.idTipaRestorana), 1)
    } else {
      this.odabraniTipoviRestorana.push(tip);
    }
  }

  onSubmit(): void {
    if(this.lokacije.length === 0) {
      this.toastr.error("Restoran mora imati bar jednu lokaciju!","Neuspeh",{
        closeButton:true,
        positionClass:'toast-bottom-right'
      });
      return;
    }
    if(this.odabraniTipoviRestorana.length === 0) {
      this.toastr.error("Restoran mora biti bar jednog tipa!","Neuspeh",{
        closeButton:true,
        positionClass:'toast-bottom-right'
      });
      return;
    }

    for (let i = 0; i < this.tipoviDatuma.length; i++) {
      if ((document.getElementById('start' + this.tipoviDatuma[i].idTipaDatuma) as HTMLInputElement).value === '' ||
            (document.getElementById('end' + this.tipoviDatuma[i].idTipaDatuma) as HTMLInputElement).value === '') {
              this.toastr.error("Morate navesti radno vreme za sve tipove datuma!","Neuspeh",{
                closeButton:true,
                positionClass:'toast-bottom-right'
              });
              return;
     }
    }

    let radnoVremeRestorana: TipDatumaPost[] = [];

    this.tipoviDatuma.forEach(tip => {
      let obj: TipDatumaPost = {
        tipDatuma: tip,
        vremeOd: (document.getElementById('start' + tip.idTipaDatuma) as HTMLInputElement).value,
        vremeDo: (document.getElementById('end' + tip.idTipaDatuma) as HTMLInputElement).value
      }
      radnoVremeRestorana.push(obj);
    });

    let req: PostRestoran = {
      lokacije: this.lokacije,
      nazivRestorana: this.form.value.nazivRestorana,
      opisRestorana: this.form.value.opisRestorana,
      pibRestorana: this.form.value.pibRestorana,
      telefonRestorana: this.form.value.telefonRestorana,
      slikaRestorana: this.form.value.slikaRestorana,
      radnoVreme: radnoVremeRestorana,
      tipRestorana: this.odabraniTipoviRestorana
    }
    this.restoranService.postRestoran(req).subscribe({
      next: res => {
        this.toastr.success("Kreiran restoran!","Uspeh",{
          closeButton:true,
          positionClass:'toast-bottom-right'
        });
        this.odabraniTipoviRestorana = [];
        this.lokacije = [];
        this.formLokacija.reset();
        this.form.reset();
        let myCheckboxes = this.checkboxes.toArray();
        myCheckboxes.forEach((element) => {
          element.checked = false;
        });
      },
      error: err => {
        console.log(err);
      }
    })
  }

  dodajLokaciju(): void {
    let lok: LokacijaAdmin = {
      broj: this.formLokacija.value.broj,
      grad: this.formLokacija.value.grad,
      latitude: this.formLokacija.value.latitude,
      longitude: this.formLokacija.value.longitude,
      postanskiBroj: this.formLokacija.value.pBroj,
      ulica: this.formLokacija.value.ulica
    }
    this.lokacije.push(lok);
    this.formLokacija.reset();
  }

  kordinate(ev){
    this.formLokacija.controls.latitude.setValue(ev.lat);
    this.formLokacija.controls.longitude.setValue(ev.lng);
  }

}
