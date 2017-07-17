import { Component, OnInit } from '@angular/core';
import {DumpData} from "../shared/service/dumpData";
import {AuthUser} from "../shared/model/authUser.model";
import {Router} from "@angular/router";
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  FormControl
} from '@angular/forms';



@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  user = new AuthUser();
  myForm: FormGroup;
  email: AbstractControl;
  password: AbstractControl;

  constructor(private DumpData: DumpData, private router: Router, fb: FormBuilder) {
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
        Validators.required, ])]
    });
    this.email = this.myForm.controls['email'];
    this.password = this.myForm.controls['password'];
  }

  ngOnInit() {
  }

  signIn() {
    console.log(this.DumpData.getUser(this.user));
    if (this.DumpData.getUser(this.user)) {
      this.router.navigate(['/dashboard']);
    }
  }

}
