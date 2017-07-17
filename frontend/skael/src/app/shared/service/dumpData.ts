import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {AuthUser} from "../model/authUser.model";
import {AppSettings} from "../appSettings";

@Injectable()
export class DumpData {
  users: AuthUser[] = [];
  constructor(private http: Http) {}

  public addUsers(authUser: AuthUser) {
    this.users.push(authUser);
  }

  public getUser(authUser: AuthUser) {
    for(let user of this.users){
      if(user.password === authUser.password &&
        user.email === authUser.email){
        return true;
      }
    }
    return false;
  }
}
