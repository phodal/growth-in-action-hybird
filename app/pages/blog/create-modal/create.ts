import {Page, ViewController} from "ionic-angular/index";

@Page({
  templateUrl: 'build/pages/blog/create-modal/create.html'
})
export class CreateBlogModal {
  private viewCtrl;

  constructor(viewCtrl: ViewController) {
    this.viewCtrl = viewCtrl;
  }

  close() {
    this.viewCtrl.dismiss();
  }
}
