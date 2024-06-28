import { Component, Input } from '@angular/core';
import { Charminglook, Treatments } from '../../interfaces/charminglook';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.scss',
})
export class AppointmentsComponent {
  constructor(private formBuilder: FormBuilder) {}
  @Input() title!: Charminglook;
  @Input() appointments!: Treatments;


  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      control1: [{ value: 'my val', disabled: true }],
    });
  }

 
}
