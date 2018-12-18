import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: [''],
  providers: [AuthService]
})
export class SignupComponent implements OnInit {
  private myForm: FormGroup;

  constructor(private  formBuilder: FormBuilder, public auth: AuthService, private router: Router) {
    this.myForm = formBuilder.group({
      'username': ['Daniel', [
        Validators.required
      ]],
      'email': ['abc@gmail.comg',
        Validators.required,
        this.asyncEmailValidator.bind(this)
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
          asyncValidator: this.asyncMatchingPasswordValidator.bind(this)
        }
      ),
    });

  }

  asyncEmailValidator(control: FormControl): Promise<any> | Observable<any> {
    return new Promise<any>(
      (resolve, reject) => {
        let currAuth = this.auth;

        setTimeout(() => {
          currAuth.validate(control.value)
            .subscribe((emailExists) => {
                if(emailExists)
                {
                  console.log('email already existed')
                  resolve({'exists': true});
                }
                else
                  resolve(null);
              },
              (error) => {
                console.log('error occurred');
              });
        }, 1500);
      }
    );
  }

  onSubmit() {
    // this.auth.validate('abc@gmail.comg')
    //   .subscribe((res) => {
    //       if(!res)
    //         console.log({'unmatched': true});
    //       else
    //         console.log(null);
    //     },
    //     (error) => {
    //       console.log('error occurred');
    //     });

    this.auth.logup(this.myForm.value)
      .subscribe((res) => {
          console.log(res);
          this.router.navigateByUrl('/signin');
        },
        (error) => {
          console.log('error occurred');
        }
      );
  }


  asyncMatchingPasswordValidator(userPassword: FormGroup): Promise<any> | Observable<any> {
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {

        let pass = userPassword.controls.password.value;
        let repeatPass = userPassword.controls.confirmPassword.value;

        if (repeatPass.length <= 0)
          resolve(null);

        if (pass === repeatPass) {
          console.log('matched');
          resolve(null);
        } else {
          console.log('unmatch');
          resolve({'unmatched': true});
        }
      }, 1000);
    });
  }

  ngOnInit() {
  }

}
