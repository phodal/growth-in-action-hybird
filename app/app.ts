import {App, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import {BlogDetailPage} from "./pages/blog-detail/blog-detail";
import {RouteConfig} from "angular2/router";

const ROUTES = [
  {path: '/app/blog/:id', component: BlogDetailPage}
];

@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
@RouteConfig(ROUTES)
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform:Platform) {
    this.rootPage = TabsPage;
    this.initializeApp(platform)
  }


  private initializeApp(platform:Platform) {
    platform.ready().then(() => {
      StatusBar.styleDefault();
    });
  }
}
