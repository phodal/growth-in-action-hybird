import {Page} from 'ionic-angular';
import {BlogList} from '../blog/list/index';


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  tab1Root:any = BlogList;
}
