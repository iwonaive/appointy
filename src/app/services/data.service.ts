import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Charminglook } from '../interfaces/charminglook';

@Injectable({ providedIn: 'root' })
export class DataService {
  url = './assets/getData.json';

  constructor(private http: HttpClient) {}
  mock: Charminglook = {
    mainData: {
      name: 'test',
      address: 'test',
      rating: 1.0,
    },
    treatments: {
      bodyPart: 'nails',
    }
  };

  getData(): Observable<Charminglook> {
    // return of(this.mock);
    return this.http.get<Charminglook>(this.url);
  }
}
