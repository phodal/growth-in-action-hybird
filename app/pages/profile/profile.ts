import {Page, NavController, LocalStorage} from 'ionic-angular';
import {Http, Headers, URLSearchParams} from "angular2/http";
import 'rxjs/add/operator/map';
import {FORM_DIRECTIVES} from "angular2/common";
import {AuthService} from '../../services/auth';
import {JwtHelper, AuthHttp} from "../../helper/angular2-jwt";

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
  private auth = new AuthService();
  private authHttp;
  private user_info;

  constructor(http:Http, nav:NavController, authHttp:AuthHttp) {
    this.nav = nav;
    this.http = http;
    this.authHttp = authHttp;
    this.local.get('id_token').then(
      (data) => {
        this.user = this.jwtHelper.decodeToken(data).username;
      }
    );
    this.local.get('user_info').then(
      (data) => {
        this.user_info = JSON.parse(data);
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


  logout() {
    this.local.remove('id_token');
    this.user = null;
  }

  authSuccess(token) {
    this.local.set('id_token', token);
    this.user = this.jwtHelper.decodeToken(token).username;
    let params:URLSearchParams = new URLSearchParams();
    params.set('username', this.user);

    this.authHttp.request('http://localhost:8000/api/user/', {
        search: params
      })
      .map(res => res.text())
      .subscribe(
        data => this.local.set('user_info', JSON.stringify(JSON.parse(data)[0])),
        err => console.log(err)
      );
  }
}
