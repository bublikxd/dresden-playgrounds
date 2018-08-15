import { Component, Input, OnInit } from '@angular/core';
import { Feature } from '../../../models/feature.model';
import { tileLayer, latLng } from 'leaflet';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements OnInit {

  @Input() places: Feature[];

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 12,
    center: latLng(51.050407, 13.737262)
  };

  constructor() { }

  ngOnInit() {
  }

}
