import {Page, NavController} from 'ionic-angular';

/*
  Generated class for the BlogDetailPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/blog-detail/blog-detail.html',
})
export class BlogDetailPage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
  }
}
