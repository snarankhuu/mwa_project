import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select } from "@angular-redux/store";
import { Observable } from "rxjs";
import { User } from '../../user/types'


@Component({
  selector: 'app-add',
  template: ` <p>
  Add Schedule
</p>
<form [formGroup]='form' (ngSubmit)="onSubmit()">
    <div class="form-group">
    <label for="date">Date</label>
    <input formControlName="date" id="date" type="date" class="form-control"/>
   
    </div>
    <div class="form-group">
    <label for="from">Departure city</label>
    <input type="text" id="from" formControlName="from" class="form-control" required/>
   
  </div>
  <div class="form-group">
  <label for="to">Arrival city</label>
  <input type="text" id="to" formControlName="to" class="form-control" required/>
</div>

<div class="form-group">
<label for="car">Car</label>
<select id="car" formControlName="car" class="form-control" required>
  <option value="-">Select Car</option>
  <option *ngFor="let car of (user | async)?.cars"> {{car.model}}, {{car.year}}</option>
</select>

</div>
<div class="form-group">
<label for="seat">Available Seats</label>
<input type="number" id="seat" formControlName="seat" class="form-control" required/>
</div>
<button class="btn btn-primary" type="submit" [disabled]="!form.valid" color="primary">Submit</button>
<span color="warn">{{ error }}</span>
</form>
  `,
  styles: []
})
export class AddComponent implements OnInit {
  form: FormGroup;
  cars: Object[];
  error: string = null;
  @select("user") user: Observable<User>;
  constructor(private api: ApiService, private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      'date': ['', Validators.required],
      'from': ['', Validators.required],
      'to': ['', Validators.required],
      'seat': ['', Validators.required],
      'car': ['', Validators.required]
    })


  }

  ngOnInit() {
  }

  async onSubmit() {
    try {
      console.log(this.form.value)
      await this.api.addSchedule(this.form.value);

      this.router.navigateByUrl('schedule');

    } catch (error) {
      console.log(error)
      this.error = 'Schedule creation failed'
    }

  }
}
