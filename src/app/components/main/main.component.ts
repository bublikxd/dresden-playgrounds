import { Component, OnInit } from '@angular/core';
import { ViewType } from '../../enums/view-type.enum';
import { Feature } from '../../models/feature.model';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  places: Feature[];
  dataLoading: boolean;

  cardView: string = ViewType.CardView;
  mapView: string = ViewType.MapView;

  viewType: string = this.cardView;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getPlaces();
  }

  getPlaces() {
    this.dataLoading = true;
    this.dataService.getPlayPlaces().subscribe(data => {
      this.places = data.features;
      this.dataLoading = false;
    });
  }

}
