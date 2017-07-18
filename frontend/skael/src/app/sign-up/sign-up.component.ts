import { Component, OnInit } from '@angular/core';
import {AuthUser} from "../shared/model/authUser.model";
import {SignUpService} from "../shared/service/sign-up.service";
import {Router} from "@angular/router";
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user = new AuthUser();
  myForm: FormGroup;
  email: AbstractControl;
  password: AbstractControl;
  username: AbstractControl;

  constructor(private signUpService: SignUpService, private router: Router, fb: FormBuilder) {
    function validationEmail(control: FormControl): {[s: string]: boolean} {
      if (control.value) {
        if (control.value.match(/@/)) {
          return null;
        } else {
          return { invalidPassword : true};
        }
      }
    }
    this.myForm = fb.group({
      'email': ['', Validators.compose([
        Validators.required, validationEmail])],
      'password': ['', Validators.compose([
        Validators.required, ])],
      'username' : [Validators.compose([
        Validators.required])]
    });
    this.email = this.myForm.controls['email'];
    this.password = this.myForm.controls['password'];
    this.username = this.myForm.controls['username'];
  }

  ngOnInit() {
  }

  signUp() {
    console.log(this.user);
    this.signUpService.signUp(this.user).subscribe((res) => {
        console.log(res.json());
      this.router.navigate(['/sign-in']);
    });
  }

}
