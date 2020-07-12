import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostRestoran } from '../../models/postResotan.model';
import { RestoranService } from '../../../home/services/restoran.service';
import { TipRestorana } from '../../../home/models/tip_restorana.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-restaurant-admin',
  templateUrl: './restaurant-admin.component.html',
  styleUrls: ['./restaurant-admin.component.css']
})
export class RestaurantAdminComponent implements OnInit {

  form: FormGroup;
  tipoviRestorana: TipRestorana[];
  odabraniTipoviRestorana: TipRestorana[] = [];

  constructor(private restoranService: RestoranService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
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
    })
  }

  promena(tip: TipRestorana) {
    if (this.odabraniTipoviRestorana.some(e => e.idTipaRestorana === tip.idTipaRestorana)) {
      this.odabraniTipoviRestorana.splice(this.odabraniTipoviRestorana.findIndex(item => item.idTipaRestorana === tip.idTipaRestorana), 1)
    } else {
      this.odabraniTipoviRestorana.push(tip);
    }
  }

  onSubmit(): void {
    let req: PostRestoran = {
      lokacije: [ {
          broj: '5',
          grad: 'Novi Sad',
          latitude: 19.827260000,
          longitude: 45.281864000,
          postanskiBroj: '21000',
          ulica: 'Bulevar Oslobodjenja'
        }
      ],
      nazivRestorana: this.form.value.nazivRestorana,
      opisRestorana: this.form.value.opisRestorana,
      pibRestorana: this.form.value.pibRestorana,
      telefonRestorana: this.form.value.telefonRestorana,
      slikaRestorana: this.form.value.slikaRestorana,
      radnoVreme: [
        {
          tipDatuma: {
            idTipaDatuma: 1,
            opisTipaDatuma: 'Radni dan'
          },
          vremeDo: '08:00',
          vremeOd: '16:00'
        }
      ],
      tipRestorana: this.odabraniTipoviRestorana
    }
    this.restoranService.postRestoran(req).subscribe({
      next: res => {
        this.toastr.success("Kreiran restoran!","Uspeh",{
          closeButton:true,
          positionClass:'toast-bottom-right'
        });
      },
      error: err => {
        console.log(err);
      }
    })
    console.log(req);
  }

}
