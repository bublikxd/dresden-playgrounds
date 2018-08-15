import { Component, Input, OnInit } from '@angular/core';
import { Feature } from '../../../models/feature.model';
import { tileLayer, latLng, marker, Layer, icon, LatLngExpression } from 'leaflet';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements OnInit {

  @Input() places: Feature[];

  layerOSM = tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: 'Open Street Map' });
  pinPath = 'assets/map/location-pin.svg';

  options = {
    layers: [this.layerOSM],
    zoom: 12,
    center: latLng(51.050407, 13.737262)
  };

  markers: Layer[] = [];

  constructor() { }

  ngOnInit() {
    if (this.places && this.places.length !== 0) {
      this.createMarkers();
    }
  }

  createMarkers() {
    this.places.forEach(place => {
      const latLong: LatLngExpression = {
        lat: place.geometry.coordinates[1],
        lng: place.geometry.coordinates[0]
      };
      const newMarker = marker(
        latLong,
        {
          icon: icon({
            iconSize: [ 25, 41 ],
            iconAnchor: [ 13, 41 ],
            iconUrl: this.pinPath,
          })
        });
      this.markers.push(newMarker);
    });
  }

}
