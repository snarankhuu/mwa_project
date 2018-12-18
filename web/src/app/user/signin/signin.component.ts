import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../auth.service";
import { HttpClient } from "@angular/common/http";
import { TokenService } from "../../services/token.service";
import { Router } from "@angular/router";
import { UserService } from '../user.service'


@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styles: [],
  providers: [AuthService]
})
export class SigninComponent implements OnInit {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private auth: AuthService, private token: TokenService, private router: Router, private user: UserService) {
    this.myForm = formBuilder.group({
      'email': ['', [Validators.required]],
      'password': ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.auth.login(this.myForm.value)
      .subscribe(
        (token) => {
          this.user.setUser(token['user'])
          this.token.saveToken(token['idToken']);
          this.router.navigateByUrl('/profile');
        },
        (err) => {
          if (err.status == 400)
            alert(err.error.message)
        }
      )
      ;
  }

}
