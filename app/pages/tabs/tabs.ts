import {Page} from 'ionic-angular';
import {BlogList} from '../blog/list/index';
import {ProfilePage} from "../profile/profile";


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  blogList:any = BlogList;
  profilePage:any = ProfilePage;
}
