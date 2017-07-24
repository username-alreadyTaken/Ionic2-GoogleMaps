import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';


//for type issues so that typeScript knows what google object is
declare var google;
// or run this command in terminal:
//  ionic cordova plugin add cordova-plugin-geolocation
// npm install @types/google-maps --save 
//if above one fails
// npm install --save @ionic-native/geolocation
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //allows to grab references and assigns it to mapElement
  @ViewChild('map') mapElement;
  //variable to hold reference
  map: any;
  constructor(public navCtrl: NavController) {

  }
  //runs as soon as map is ready
  ionViewDidLoad(){
  this.initMap(); 
  }

//sets map
initMap(){
  //insert your lat and long
  let latLng = new google.maps.LatLng(12.905547, 77.584669);
  let mapOptions = {
    center: latLng,
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    
}

}
