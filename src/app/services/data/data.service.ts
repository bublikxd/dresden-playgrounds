import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Place } from '../../models/place.model';

@Injectable()
export class DataService {

  private dataUrl = './assets/data/playplaces.json';

  constructor(private httpClient: HttpClient) { }

  getPlayPlaces(): Observable<Place> {
    return this.httpClient.get(this.dataUrl);
  }
}
