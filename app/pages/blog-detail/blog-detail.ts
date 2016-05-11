import {Page, NavController, NavParams} from 'ionic-angular';
import {BlogpostServices} from "../../services/BlogpostServices";

@Page({
  templateUrl: 'build/pages/blog-detail/blog-detail.html',
  providers: [BlogpostServices]
})
export class BlogDetailPage {
  private navParams;
  private blogServices;
  private blogpost;

  constructor(public nav:NavController, navParams:NavParams, blogServices:BlogpostServices) {
    this.nav = nav;
    this.navParams = navParams;
    this.blogServices = blogServices;

    this.initService();
  }

  private initService() {
    let id = this.navParams.get('id');
    this.blogServices.getBlogpostDetail(id).subscribe(
      data => {
        this.blogpost = JSON.parse(data._body);
        console.log(this.blogpost);
      },
      err => console.log('Error: ' + JSON.stringify(err)),
      () => console.log('Get Blogpost')
    );
  }
}
