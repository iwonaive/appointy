import { Component, Input, OnInit } from '@angular/core';
import { Charminglook, Treatment } from '../../interfaces/charminglook';
import { FormBuilder, FormGroup, FormControl, NonNullableFormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface AppointmentForm {
  treatment: FormControl<string>;
  details: FormControl<string>;
  beautician: FormControl<string>;
  date: FormControl<string>;
}

@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.scss',
})
export class AppointmentsComponent implements OnInit{
  constructor(private formBuilder: FormBuilder) {}
  @Input() title!: Charminglook;
  @Input() appointments!: Treatment[];
  @Input() selectedTreatment: Treatment | null = null;

  form!: FormGroup<AppointmentForm>;

  ngOnInit(): void {
    this.form = this.formBuilder.group<AppointmentForm>({
      treatment: new FormControl('', {nonNullable: true}),
      details: new FormControl('', {nonNullable: true}),
      beautician: new FormControl('', {nonNullable: true}),
      date: new FormControl('', {nonNullable: true}),
    })
  }
}
