import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Charminglook } from '../interfaces/charminglook';

@Injectable({ providedIn: 'root' })
export class DataService {
  url = './assets/getData.json';

  constructor(private http: HttpClient) {}

  getData(): Observable<Charminglook> {
    return this.http.get<Charminglook>(this.url);
  }
}
