import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {HttpClient} from "@angular/common/http";
import {TokenService} from "../../services/token.service";

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styles: [],
  providers: [AuthService]
})
export class SigninComponent implements OnInit {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private auth: AuthService, private token: TokenService) {
    this.myForm = formBuilder.group({
      'username': ['aaa', [Validators.required]],
      'password': ['bbb', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.auth.login(this.myForm.value)
      .subscribe(
        (token) => {
          console.log(token);
          this.token.saveToken(token['idToken']);
        },
        (err) => console.log(err)
      )
    ;
  }

}
