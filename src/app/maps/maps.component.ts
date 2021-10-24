import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

//import { styles } from './mapstyles';
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  title = 'google-maps';

  //private map: google.maps.Map

  ngOnInit(): void {
    let loader = new Loader({
      apiKey: 'AIzaSyC-H1ny0ccByXP7I0L1eDQmAhcYiavhPnw'
    })

    loader.load().then(() => {
      console.log('loaded gmaps')
      alert("okay");

      //const location = { lat: 51.233334, lng: 	6.783333 }

 new google.maps.Map(document.getElementById("map")!, {
        center: { lat: 51.233334, lng: 	6.783333},
         zoom: 6 
      })

      // const marker = new google.maps.Marker({
      //   position: location,
      //   map: this.map,
      // });
    })
  }
}