import { Component, OnInit } from '@angular/core';
import {AuthUser} from "../shared/model/authUser.model";
import {SignUpService} from "../shared/service/sign-up.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user = new AuthUser();

  constructor(private signUpService: SignUpService, private router: Router) { }

  ngOnInit() {
  }

  signUp() {
    console.log(this.user)
    this.signUpService.signUp(this.user);
    this.router.navigate(['/sign-in']);
  }

}
