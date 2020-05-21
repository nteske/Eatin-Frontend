import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';  
import { ApiKeys } from '../../../../core/constants/api-keys';
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


  public constructor() {
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
     // var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(this.map));
      this.nekiUi = H.ui.UI.createDefault(this.map, defaultLayers);
      this.dropMarker();
  }
  private dropMarker() {
    var group = new H.map.Group();
    this.map.addObject(group);
 
      var marker = new H.map.Marker({ lat: this.lat, lng: this.lng});
      // add custom data to the marker
      marker.setData("html");
      group.addObject(marker);

}
}
