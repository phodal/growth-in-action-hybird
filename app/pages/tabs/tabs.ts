import {Page} from 'ionic-angular';
import {Page1} from '../page1/page1';


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  tab1Root:any = Page1;
}
