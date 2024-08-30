import { Component, Input, OnInit } from '@angular/core';
import { Charminglook, Treatment } from '../../interfaces/charminglook';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

interface AppointmentForm {
  treatment: FormControl<string | null>;
  details: FormControl<string>;
  beautician: FormControl<string>;
  date: FormControl<string>;
}

@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.scss',
})
export class AppointmentsComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}
  @Input() title!: Charminglook;
  @Input() appointments!: Treatment[];
  @Input() set selectedTreatment(selectedTreatment: Treatment | null) {
    if (selectedTreatment) {
      this._selectedTreatment = selectedTreatment;
      this.setFormValues();
    }
  }

  form!: FormGroup<AppointmentForm>;
  _selectedTreatment: Treatment | null = null;

  get treatment() {
    return this.form.controls.treatment;
  }

  get details() {
    return this.form.controls.details;
  }

  get beautician() {
    return this.form.controls.beautician;
  }

  ngOnInit(): void {
    this.initForm();
    this.setFormAsDisabled();
  }

  private initForm() {
    this.form = this.formBuilder.group<AppointmentForm>({
      treatment: new FormControl('', {
        nonNullable: false,
        validators: [Validators.required],
      }),
      details: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required]
      }),
      beautician: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      date: new FormControl('', { nonNullable: true }),
    });
  }

  private setFormAsDisabled() {
    this.form.disable();
  }

  setFormValues() {
    this.form.enable();
    this.treatment.setValue(this._selectedTreatment?.name!);
    this.treatment.updateValueAndValidity();
    this.details.setValue(this._selectedTreatment?.details!)
    this.details.updateValueAndValidity();
    this.beautician.reset();
    this.beautician.updateValueAndValidity();
  }
}
