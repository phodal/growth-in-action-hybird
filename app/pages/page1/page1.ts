import {Page} from 'ionic-angular';
import {BlogpostServices} from '../../services/BlogpostServices';

@Page({
  templateUrl: 'build/pages/page1/page1.html',
  providers: [BlogpostServices]
})
export class Page1 {
  private blogpostServices;

  constructor(blogpostServices:BlogpostServices) {
    this.blogpostServices = blogpostServices;
    this.init();
  }

  init(){
    this.blogpostServices.getBlogpostLists();
  }
}
