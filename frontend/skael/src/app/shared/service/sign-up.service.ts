import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {AppSettings} from "../appSettings";
import {AuthUser} from "../model/authUser.model";
import {DumpData} from "./dumpData";

@Injectable()
export class SignUpService {
  constructor(private http: Http, private DumpData: DumpData) {}

  public signUp(authUser: AuthUser) {
    this.DumpData.addUsers(authUser);
    // this.http.get('http://104.236.176.86/api/hello').subscribe((rest) => {
    //   console.log(rest)
    // })
    // return this.http.get(AppSettings.API_ENDPOINT + '/users', authUser);
  }
}
