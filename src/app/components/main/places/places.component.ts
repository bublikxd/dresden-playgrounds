import { Component, Input, OnInit } from '@angular/core';
import { Feature } from '../../../models/feature.model';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {

  @Input() places: Feature[];

  constructor() { }

  ngOnInit() {
  }

}
