import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PlacesData } from '../../models/places-data.model';

@Injectable()
export class DataService {

  private dataUrl = './assets/data/playplaces.json';

  constructor(private httpClient: HttpClient) { }

  getPlayPlaces(): Observable<PlacesData> {
    return this.httpClient.get<PlacesData>(this.dataUrl);
  }
}
