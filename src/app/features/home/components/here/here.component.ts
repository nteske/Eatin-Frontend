import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';  
import { MapMarkersService } from '../../services/map-markers.service';
import { ApiKeys } from '../../../../core/constants/api-keys';
import { Lokacija } from 'src/app/features/home/models/lokacija.model';
declare var H: any;  


@Component({
  selector: 'app-here',
  templateUrl: './here.component.html',
  styleUrls: ['./here.component.css']
})
export class HereComponent implements OnInit {

  private platform: any;
  private map: any;
  public nekiUi: any;


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


  public constructor(private mapMarkersService:MapMarkersService) {
      this.platform = new H.service.Platform({
          "appid": ApiKeys.hereId,
          "apikey": ApiKeys.hereKey
      });
  }

  public ngOnInit() { }

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
      window.addEventListener('resize', () => this.map.getViewPort().resize());
     //var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(this.map));
      this.nekiUi = H.ui.UI.createDefault(this.map, defaultLayers);
      //var group = new H.map.Group();
     // this.map.addObject(group);
      this.mapMarkersService.getMarkers().subscribe(data=>{
        for(let lokacija of data)this.dropMarker(lokacija);
      });
  }
  private dropMarker(lokacija : Lokacija) {
      var marker = new H.map.Marker({ lat: lokacija.latitude, lng: lokacija.longitude});
      // add custom data to the marker
      marker.setData(lokacija.ulica);
      this.map.addObject(marker);

}
}
