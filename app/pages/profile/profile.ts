import {Page, NavController, LocalStorage} from 'ionic-angular';
import {Http, Headers} from "angular2/http";
import 'rxjs/add/operator/map';

@Page({
  templateUrl: 'build/pages/profile/profile.html',
})
export class ProfilePage {
  private nav;
  private http;
  private LOGIN_URL = 'http://localhost:8000/api-token-auth/';
  private contentHeader;
  private authType = 'login';
  private local = new LocalStorage();

  constructor(http: Http, nav:NavController) {
    this.nav = nav;
    this.http = http;
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

  authSuccess(token) {
    this.local.set('id_token', token);
  }
}
