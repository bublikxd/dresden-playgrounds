import { Component, Input, OnInit } from '@angular/core';
import { Feature } from '../../../models/feature.model';

@Component({
  selector: 'app-place-item',
  templateUrl: './place-item.component.html',
  styleUrls: ['./place-item.component.scss']
})
export class PlaceItemComponent implements OnInit {

  @Input() place: Feature;

  constructor() { }

  ngOnInit() {
  }

}
