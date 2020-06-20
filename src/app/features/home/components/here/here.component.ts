import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';  
import { ApiKeys } from '../../../../core/constants/api-keys';
import { Lokacija } from 'src/app/features/home/models/lokacija.model';
import { Restoran } from '../../models/restoran.model';
import { ApiUrls } from 'src/app/core/constants/api-urls';

declare var H: any;  


@Component({
  selector: 'app-here',
  templateUrl: './here.component.html',
  styleUrls: ['./here.component.css']
})
export class HereComponent implements OnInit {

  private platform: any;
  private map: any;
  private nekiUi: any=null;


  @ViewChild("map")
  public mapElement: ElementRef;
  @Input()
  public lat: any;

  @Input()
  public lng: any;
  
  @Input()
  public width: any;

  @Input()
  public height: any;

  @Input()
  public restorani: Restoran[];


  public constructor() {
      this.platform = new H.service.Platform({
          "appid": ApiKeys.hereId,
          "apikey": ApiKeys.hereKey
      });
  }

  public ngOnInit() { }

  getMyImage(text):string{
    return ApiUrls.getImageUrl(text);
  }

  public ngAfterViewInit() {
      let defaultLayers = this.platform.createDefaultLayers();
      this.map = new H.Map(
          this.mapElement.nativeElement,
          defaultLayers.vector.normal.map,
          {
              zoom: 13,
              center:  { lat: this.lat, lng: this.lng }
          }
      );
      this.nekiUi = H.ui.UI.createDefault(this.map, defaultLayers);
      window.addEventListener('resize', () => this.map.getViewPort().resize());
      var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(this.map));
     // var group = new H.map.Group();
     // this.map.addObject(group);

      for(let restoran of this.restorani)this.dropMarker(restoran);
  }

  private dropMarker(restoran : Restoran) {
      var icon = new H.map.Icon('../../../../../assets/images/mappins.png');
      var marker = new H.map.Marker({ lng: Number(restoran.restoranSeNalazis[0].latitude), lat: Number(restoran.restoranSeNalazis[0].longitude)}, { icon: icon });
      var html='<a style="cursor:pointer;"><div style="text-align:center;"><b>'+restoran.nazivRestorana+'</b></div>' +
      '<div style="text-align:center;"><img style="max-width:90px;" src="'+this.getMyImage(restoran.slikaRestorana)+'"></div>'+
      '<div style="text-align:center;"><i>'+restoran.telefonRestorana +'</i></div></a>';
      marker.setData(html);
      var self = this;
      marker.addEventListener('tap', function (evt) {
        var bubble =  new H.ui.InfoBubble(evt.target.getGeometry(), {
          content: evt.target.getData()
        });
        self.nekiUi.addBubble(bubble);
      }, false);
      this.map.addObject(marker);

}
}
