import { Component, Input } from '@angular/core';
import { Charminglook, Treatments } from '../../interfaces/charminglook';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-offer',
  imports: [CommonModule],
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss'],
})
export class OfferComponent {
  @Input() title!: Charminglook;
  @Input() treatments!: Treatments[];

 trackByFn(index: number) {
    console.log(index);
    return index;
  }
}

