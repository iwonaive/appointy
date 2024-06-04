import { Component, Input } from '@angular/core';
import { Charminglook } from '../../interfaces/charminglook';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-title',
  imports: [CommonModule],
  templateUrl: './title.component.html',
})
export class TitleComponent {
  @Input() title!: Charminglook;
}
