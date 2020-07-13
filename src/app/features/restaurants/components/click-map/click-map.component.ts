import { Component, OnInit,EventEmitter, ViewChild, Input, ElementRef, OnChanges, Output } from '@angular/core';
import { ApiKeys } from 'src/app/core/constants/api-keys';
import { ApiUrls } from 'src/app/core/constants/api-urls';

declare var H: any;  
@Component({
  selector: 'app-click-map',
  templateUrl: './click-map.component.html',
  styleUrls: ['./click-map.component.css']
})

export class ClickMapComponent implements OnInit ,OnChanges{
  @Output() promena = new EventEmitter();

  public directions: any;
  private platform: any;
  private map: any;
  private router: any;
  private nekiUi: any=null;
  public first=false;
  public marker=null;
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

      this.directions = [];
      this.router = this.platform.getRoutingService();
  }

  public ngOnInit() {

   }

  public ngOnChanges(){

  }


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

      this.clickMapicu();
      //this.first=true;
  }
  clickMapicu(){
    var self=this;
    this.map.addEventListener('tap', function (evt) {
      var coord =self.map.screenToGeo(evt.currentPointer.viewportX,
              evt.currentPointer.viewportY);
      let lat= Math.abs(coord.lat.toFixed(4)) ;
      let lng= Math.abs(coord.lng.toFixed(4)) ;
      self.kliknoOvde(lat,lng);
    });
  }

  kliknoOvde(lat,lng){
    if(this.marker!=null){this.map.removeObject(this.marker);this.marker=null;}
    var icon = new H.map.Icon('../../../../../assets/images/mappins.png');
    this.marker = new H.map.Marker({ lng: Number(lng), lat: Number(lat)}, { icon: icon });
    this.map.addObject(this.marker);
    let obj={lat:lat,lng:lng};
    this.promena.emit(obj);

  }
//

}
//