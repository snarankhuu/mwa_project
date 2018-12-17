import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add',
  template: ` <p>
  Add Schedule
</p>
<form [formGroup]='form' (ngSubmit)="onSubmit()">
<input type="text" placeholder="Name" formControlName="name"/>
<button type="submit" [disabled]="!form.valid" color="primary">Submit</button>
</form>
  `,
  styles: []
})
export class AddComponent implements OnInit {
  form: FormGroup;
  constructor(private api: ApiService, private fb: FormBuilder) {
    this.form = this.fb.group({
      'name': ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  async onSubmit() {
    try {
      console.log(this.form.value)
      await this.api.addSchedule(this.form.value);

    } catch (error) {
      console.log(error)
    }

  }
}
