import {Page} from 'ionic-angular';
import {BlogpostServices} from '../../services/BlogpostServices';

@Page({
  templateUrl: 'build/pages/page1/page1.html',
  providers: [BlogpostServices]
})
export class Page1 {
  private blogListService;

  constructor(blogpostServices:BlogpostServices) {
    this.blogListService = blogpostServices;
    this.initService();
  }

  private initService() {
    this.blogListService.getBlogpostLists().subscribe(
      data => {this.blogposts = data; console.log(data);},
      err => console.log('Error: ' + JSON.stringify(err)),
      () => console.log('Get Blogpost')
    );;
  }
}
