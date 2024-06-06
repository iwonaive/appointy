import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TitleComponent } from './components/title/title.component';
import { DataService } from './services/data.service';
import { Observable } from 'rxjs';
import { Charminglook } from './interfaces/charminglook';
import { CommonModule } from '@angular/common';
import { OfferComponent } from './components/offer/offer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, TitleComponent, CommonModule, OfferComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'appointy';

  constructor(private dataService: DataService) {}

  data$!: Observable<Charminglook>;

  ngOnInit() {
    this.data$ = this.dataService.getData();
    this.data$.subscribe((v) => console.log(v));
  }
}
