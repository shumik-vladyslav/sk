import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {AuthUser} from "../model/authUser.model";
import {AppSettings} from "../appSettings";

@Injectable()
export class SignInService {
  constructor(private http: Http) {}

  public signIn(authUser: AuthUser) {
    return this.http.get(AppSettings.API_ENDPOINT + '/auth', authUser);
  }
}
