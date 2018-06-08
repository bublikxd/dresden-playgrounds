import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  places: any;
  dataLoading: boolean;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getPlaces();
  }

  getPlaces() {
    this.dataLoading = true;
    this.dataService.getPlayPlaces().subscribe(data => {
      this.places = data;
      console.log(data);
      this.dataLoading = false;
    });
  }

}
