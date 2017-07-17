import { Component, OnInit } from '@angular/core';
import {AuthUser} from "../shared/model/authUser.model";
import {SignUpService} from "../shared/service/sign-up.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-sign-up',
  templateUrl: './home-sign-up.component.html',
  styleUrls: ['./home-sign-up.component.css']
})
export class HomeSignUpComponent implements OnInit {

  user = new AuthUser();

  constructor(private signUpService: SignUpService, private router: Router) { }

  ngOnInit() {
  }

  signUp() {
    this.signUpService.signUp(this.user);
    this.router.navigate(['/sign-in']);
  }

}
