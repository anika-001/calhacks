import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { environment } from 'src/environments/environment';
// import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map1',
  templateUrl: './map1.component.html',
  styleUrls: ['./map1.component.scss']
})
export class Map1Component implements OnInit {
  // map!: mapboxgl.Map;
  // style = 'mapbox://styles/mapbox/streets-v11';
  // lat = 37.75;
  // lng = -122.41;
  constructor() { }
  ngOnInit() {
    //mapboxgl.accessToken = environment.mapbox.accessToken;
    // this.map = new mapboxgl.Map({
    //   accessToken: environment.mapbox.accessToken,
    //   container: 'map',
    //   style: this.style,
    //   zoom: 13,
    //   center: [this.lng, this.lat]
    //   });
    //   this.map = new mapboxgl.Map({
    //     container: 'map',
    //     style: this.style,
    //     zoom: 13,
    //     center: [this.lng, this.lat]
    // });

    // this.map.addControl(new mapboxgl.NavigationControl());
  }
}