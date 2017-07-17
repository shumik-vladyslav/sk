import { Component, OnInit } from '@angular/core';
import {DumpData} from "../shared/service/dumpData";
import {AuthUser} from "../shared/model/authUser.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  user = new AuthUser();

  constructor(private DumpData: DumpData, private router: Router) { }

  ngOnInit() {
  }

  signIn() {
    console.log(this.DumpData.getUser(this.user))
    if (this.DumpData.getUser(this.user)) {
      this.router.navigate(['/dashboard']);
    }
  }

}
