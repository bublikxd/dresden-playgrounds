import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';
import { Feature } from '../../../models/feature.model';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {

  @Input() places: Feature[];

  pageSize: number = 12;
  sliceStart: number = 0;
  sliceEnd: number = this.pageSize;

  constructor() { }

  ngOnInit() { }

  getPageEvent(event: PageEvent) {
    if (event.pageIndex > event.previousPageIndex) {
      this.sliceStart = this.sliceStart + event.pageSize;
      this.sliceEnd = this.sliceEnd + event.pageSize;
    }
    if (event.pageIndex < event.previousPageIndex) {
      this.sliceStart = this.sliceStart - event.pageSize;
      this.sliceEnd = this.sliceEnd - event.pageSize;
    }
  }

}
