import {Page, ViewController} from "ionic-angular/index";
import {AuthHttp} from "../../../helper/angular2-jwt";
import {Headers} from "angular2/http";

@Page({
  templateUrl: 'build/pages/blog/create-modal/create.html'
})
export class CreateBlogModal {
  private viewCtrl;
  private authHttp;
  private contentHeader;

  constructor(viewCtrl:ViewController, authHttp: AuthHttp) {
    this.authHttp = authHttp;
    this.viewCtrl = viewCtrl;
  }

  close() {
    this.viewCtrl.dismiss();
  }

  create(value) {
    this.contentHeader = new Headers({"Content-Type": "application/json"});
    this.authHttp.post('http://127.0.0.1:8000/api/blogpost/', JSON.stringify(value), {headers: this.contentHeader})
      .map(res => res.json())
      .subscribe(
        data => this.postSuccess(data),
        err => console.log(err)
      );
  }

  postSuccess(data) {
    this.close()
  }
}
