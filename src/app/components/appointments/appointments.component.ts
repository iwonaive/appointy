import { Component, Input } from '@angular/core';
import { Charminglook } from '../../interfaces/charminglook';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [],
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.scss',
})
export class AppointmentsComponent {
  constructor(formBuilder: FormBuilder) {}
  @Input() title!: Charminglook;

  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      control1: [{ value: 'my val', disabled: true }],
    });
  }
}
