import { Component, Input } from '@angular/core';
import { Address } from '../../interfaces/charminglook';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-title',
  imports: [CommonModule],
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent {
  @Input() title!: Address;
}
