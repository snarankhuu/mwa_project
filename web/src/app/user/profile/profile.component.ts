import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";
import {TokenService} from "../../services/token.service";
import {HttpClient} from "@angular/common/http";
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
import {ApiService} from "../../api.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {
  public userDetails;
  public carList;
  carForm: FormGroup;


  constructor(private auth: AuthService, private router: Router, private token: TokenService, private http: HttpClient, private api: ApiService, private fb: FormBuilder) {
    this.carForm = this.fb.group({
      'model': ['', [Validators.required]],
      'year': ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.auth.getUserProfile().subscribe(
      res => {
        this.userDetails = res;
        this.carList = res['cars'];
      },
      err => {
        console.log(err);
      }
    );
  }

  onCarSubmit() {
    //TODO: filter by search box
    this.api.addCar(this.carForm.value)
      .subscribe(
        (user) => {
          this.carList = user['cars'];
        }
      )
  }
}
