import { Component, Input, Output } from '@angular/core';
import { Charminglook, Treatment } from '../../interfaces/charminglook';
import { CommonModule } from '@angular/common';
import { EventEmitter } from 'node:stream';

@Component({
  standalone: true,
  selector: 'app-offer',
  imports: [CommonModule],
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss'],
})
export class OfferComponent {
  @Input() offer!: Treatment[];
  @Output() emitTreatment = new EventEmitter<Treatment>();

  trackByFn(index: number) {
    return index;
  }
  handleBook(item: Treatment) {
    this.emitTreatment.emit(item);
  }
}
