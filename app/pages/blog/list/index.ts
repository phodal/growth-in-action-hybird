import {Page, NavController, Modal} from 'ionic-angular';
import {BlogpostServices} from '../../../services/BlogpostServices';
import {BlogDetailPage} from "../../blog-detail/blog-detail";
import {CreateBlogModal} from "../create-modal/create";

@Page({
  templateUrl: 'build/pages/blog/list/index.html',
  providers: [BlogpostServices]
})
export class BlogList {
  private blogListService;
  public blogposts;
  private nav;

  constructor(nav: NavController, blogpostServices:BlogpostServices) {
    this.blogListService = blogpostServices;
    this.nav = nav;
    this.initService();
  }

  private initService() {
    this.blogListService.getBlogpostLists().subscribe(
      data => {this.blogposts = JSON.parse(data._body);},
      err => console.log('Error: ' + JSON.stringify(err)),
      () => console.log('Get Blogpost')
    );
  }

  createBlog() {
    let modal = Modal.create(CreateBlogModal);
    this.nav.present(modal)
  }

  navigate(id){
    this.nav.push(BlogDetailPage, {
      id: id
    });
  }
}
