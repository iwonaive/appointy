import { Component, OnInit } from '@angular/core';
import { Data, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TitleComponent } from './components/title/title.component';
import { DataService } from './services/data.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, TitleComponent, HttpClient],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'appointy';

  constructor(private dataService: DataService, private http: HttpClient) {}
  
  data$!: Observable<Data>;

ngOnInit() {
  this.data$ = this.http.getData();
}
}

// constructor(httpService: HttpService) {}

// data$!: Observable<cośtam>;

// ngOnInit(): void {
//   this.data$ = this.httpService.getData();
// }