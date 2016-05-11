import {App, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import {BlogDetailPage} from "./pages/blog-detail/blog-detail";
import {RouteConfig} from "angular2/router";
import {ProfilePage} from "./pages/profile/profile";
import {AuthHttp, AuthConfig} from "./helper/angular2-jwt";
import {Http} from "angular2/http";
import {provide} from "angular2/core";

const ROUTES = [
  {path: '/app/blog/:id', component: BlogDetailPage},
  {path: '/app/profile', component: ProfilePage}
];

@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  config: {}, // http://ionicframework.com/docs/v2/api/config/Config/
  providers: [
    provide(AuthHttp, {
      useFactory: (http) => {
        return new AuthHttp(new AuthConfig, http);
      },
      deps: [Http]
    })
  ]
})

@RouteConfig(ROUTES)
export class MyApp {
  rootPage:any = TabsPage;
  routes = ROUTES;

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
