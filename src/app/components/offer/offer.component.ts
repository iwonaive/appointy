import { Component, Input } from '@angular/core';
import { Charminglook } from '../../interfaces/charminglook';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-offer',
  imports: [CommonModule],
  templateUrl: './offer.component.html',
})
export class OfferComponent {
  @Input() title!: Charminglook;
}
