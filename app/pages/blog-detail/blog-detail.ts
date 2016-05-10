import {Page, NavController, NavParams} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/blog-detail/blog-detail.html',
})
export class BlogDetailPage {
  private navParams;

  constructor(public nav: NavController, navParams: NavParams) {
    this.nav = nav;
    this.navParams = navParams;

    console.log(this.navParams.get('id'));
  }
}
