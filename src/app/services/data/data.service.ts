import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class DataService {

  private dataUrl = './assets/data/playplaces.json';

  constructor(private httpClient: HttpClient) { }

  getPlayPlaces(): Observable<any> {
    return this.httpClient.get(this.dataUrl);
  }
}
