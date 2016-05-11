import {Page, NavController, LocalStorage} from 'ionic-angular';
import {Http, Headers} from "angular2/http";
import 'rxjs/add/operator/map';
import {JwtHelper} from "../../helper/JWTHelper";
import {FORM_DIRECTIVES} from "angular2/common";

@Page({
  templateUrl: 'build/pages/profile/profile.html',
  directives: [FORM_DIRECTIVES]
})
export class ProfilePage {
  private nav;
  private http;
  private LOGIN_URL = 'http://localhost:8000/api-token-auth/';
  private contentHeader;
  private authType = 'login';
  private local = new LocalStorage();
  private jwtHelper = new JwtHelper();
  private user;

  constructor(http: Http, nav:NavController) {
    this.nav = nav;
    this.http = http;
    let token = this.local.get('id_token').then(
      (data) => {
        console.log(data);
        this.user = this.jwtHelper.decodeToken(data).username;
      }
    );
  }

  login(credentials) {
    this.contentHeader = new Headers({"Content-Type": "application/json"});
    this.http.post(this.LOGIN_URL, JSON.stringify(credentials), {headers: this.contentHeader})
      .map(res => res.json())
      .subscribe(
        data => this.authSuccess(data.token),
        err => console.log(err)
      );
  }

  signup(credentials) {
    console.log("TODO");
    // this.http.post(this.SIGNUP_URL, JSON.stringify(credentials), { headers: this.contentHeader })
    //   .map(res => res.json())
    //   .subscribe(
    //     data => this.authSuccess(data.id_token),
    //     err => this.error = err
    //   );
  }
  authSuccess(token) {
    this.local.set('id_token', token);
    this.user = this.jwtHelper.decodeToken(token).username;
  }
}
