import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-title',
  templateUrl: './title.component.html',
})
export class TitleComponent {
  @Input() title: TitleComponent;
}
