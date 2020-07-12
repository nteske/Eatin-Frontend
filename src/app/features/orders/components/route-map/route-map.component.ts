import { Component, OnInit, Input, ViewChild, ElementRef, OnChanges } from '@angular/core';
import { Restoran } from 'src/app/features/home/models/restoran.model';
import { ApiUrls } from 'src/app/core/constants/api-urls';
import { ApiKeys } from 'src/app/core/constants/api-keys';
import { Korisnik } from 'src/app/features/user/models/korisnik.model';
import { Lokacija } from 'src/app/features/home/models/lokacija.model';


declare var H: any;  


@Component({
  selector: 'app-route-map',
  templateUrl: './route-map.component.html',
  styleUrls: ['./route-map.component.css']
})
export class RouteMapComponent implements OnInit,OnChanges {
  public directions: any;
  private platform: any;
  private map: any;
  private router: any;
  private nekiUi: any=null;
  public markeri:Array<any>=[];
  public baloni:Array<any>=[];
  public first=false;

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
  public restoran: Restoran=null;

  @Input()
  public korisnik: Lokacija=null;

  public startMarker; 
  public finishMarker
  public routeLine;
  public routeArrows;
  
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
    if(this.korisnik==null||this.restoran==null){
      if(this.startMarker==null&&this.finishMarker==null&&this.routeLine==null&&this.routeArrows==null)
      {

      }else{
        this.map.removeObject(this.startMarker);
        this.map.removeObject(this.finishMarker);
        this.map.removeObject(this.routeLine);
        this.map.removeObject(this.routeArrows);
        this.startMarker=null;
        this.finishMarker=null;
        this.routeLine=null;
        this.routeArrows=null;
      }
    }else{
      this.route();
    }
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

      //this.route();
      //this.first=true;
  }



public route() {
  if(this.restoran.lokacije[0]&&Number(this.korisnik.latitude)>10&&Number(this.korisnik.longitude)>10){
  let params = {
      "mode": "fastest;car",
      "waypoint0": "geo!" + this.restoran.lokacije[0].latitude+','+Number(this.restoran.lokacije[0].longitude),
      "waypoint1": "geo!" + Number(this.korisnik.latitude)+','+ Number(this.korisnik.longitude),
      "representation": "display"
  }
  this.map.removeObjects(this.map.getObjects());
  this.router.calculateRoute(params, data => {
      if(data.response) {
          this.directions = data.response.route[0].leg[0].maneuver;
          data = data.response.route[0];
          let lineString = new H.geo.LineString();
          data.shape.forEach(point => {
              let parts = point.split(",");
              lineString.pushLatLngAlt(parts[0], parts[1]);
          });
          this.routeLine = new H.map.Polyline(lineString, {
             style: {
              lineWidth: 10,
              strokeColor: 'rgba(0, 128, 255, 0.7)',
              lineTailCap: 'arrow-tail',
              lineHeadCap: 'arrow-head'
            }});

            this.routeArrows = new H.map.Polyline(lineString, {
              style: {
                lineWidth: 10,
                fillColor: 'white',
                strokeColor: 'rgba(255, 255, 255, 1)',
                lineDash: [0, 2],
                lineTailCap: 'arrow-tail',
                lineHeadCap: 'arrow-head' }
              }
            );
          var icon = new H.map.Icon('../../../../../assets/images/mappins.png');
          this.startMarker = new H.map.Marker({ lat: Number(this.restoran.lokacije[0].latitude), lng: Number(this.restoran.lokacije[0].longitude)}, { icon: icon });


          var icon = new H.map.Icon('../../../../../assets/images/usermappins.png');
          this.finishMarker = new H.map.Marker({ lat: Number(this.korisnik.latitude), lng: Number(this.korisnik.longitude)}, { icon: icon });


          this.map.addObjects([this.routeLine, this.routeArrows,this.startMarker,this.finishMarker]);
         // this.map.setViewBounds(this.routeLine.getBounds());
      }
  }, error => {
      console.error(error);
  });
}
}


}
//