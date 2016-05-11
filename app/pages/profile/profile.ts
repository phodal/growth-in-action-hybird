import {Page, NavController} from 'ionic-angular';
import {Http, Headers} from "angular2/http";

@Page({
  templateUrl: 'build/pages/profile/profile.html',
})
export class ProfilePage {
  private nav;
  private http;
  private LOGIN_URL = 'http://localhost:8000/api-token-auth/';
  private contentHeader;
  private authType = 'login';

  constructor(http: Http, nav:NavController) {
    this.nav = nav;
    this.http = http;
  }

  login(credentials) {
    this.contentHeader = new Headers({"Content-Type": "application/json"});
    this.http.post(this.LOGIN_URL, JSON.stringify(credentials), {headers: this.contentHeader})
      .map(res => res.json())
      .subscribe(
        data => this.authSuccess(data),
        err => console.log(err)
      );
  }

  authSuccess(token) {
    console.log(token);
  }
}
