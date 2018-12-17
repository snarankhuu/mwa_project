import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: []
})
export class SignupComponent implements OnInit {
  private myForm: FormGroup;
  constructor(private  formBuilder : FormBuilder) {
    this.myForm =  formBuilder.group({
      'firstname': ['Daniel', [
        Validators.required
      ]],
      'lastname': ['Trinh', [
        Validators.required
      ]],
      'email': ['abc@gmail.comg',
        Validators.required,
        // this.asyncEmailValidator
      ],
      'userPassword': formBuilder.group({
          'password': ['abc', [
            Validators.required
          ]],
          'confirmPassword': ['abc', [
            Validators.required
          ]]
        },
        {
          // asyncValidator: this.asyncMatchingPasswordValidator.bind(this)
        }
      ),
    });

  }

  onSubmit()
  {

  }

  ngOnInit() {
  }

}
