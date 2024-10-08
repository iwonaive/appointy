import { Component, NgModule, OnInit } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TitleComponent } from './components/title/title.component';
import { DataService } from './services/data.service';
import { Observable } from 'rxjs';
import { Charminglook, Treatment } from './interfaces/charminglook';
import { CommonModule } from '@angular/common';
import { OfferComponent } from './components/offer/offer.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { VisitsComponent } from './components/visits/visits.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    TitleComponent,
    CommonModule,
    OfferComponent,
    AppointmentsComponent,
    VisitsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'appointy';
  selectedTreatment: Treatment | null = null;

  constructor(private dataService: DataService) {}

  data$!: Observable<Charminglook>;

  ngOnInit() {
    this.data$ = this.dataService.getData();
    this.data$.subscribe((v) => console.log(v));
  }

  handleTreatmentEmitted(event: Treatment) {
    this.selectedTreatment = event;
  }
}
