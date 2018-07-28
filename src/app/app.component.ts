import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Auth } from 'aws-amplify';

import { TabbedHomePage } from '../pages/tabbed-home/tabbed-home';
import { LoginPage } from '../pages/login/login';
import { SettingsPage } from '../pages/settings/settings';
import { Events } from 'ionic-angular';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = null;
  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public events: Events) {
    let globalActions = function() {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    };

    platform.ready()
      .then(() => {
        Auth.currentAuthenticatedUser()
          .then(() => { this.rootPage = TabbedHomePage; })
          .catch(() => { this.rootPage = LoginPage; })
          .then(() => globalActions());
      });
  }

  openSettings(){
    console.log("opening settings");
    this.nav.push(SettingsPage);
  }

  goToFeed(i){

    this.events.publish('functionCall:goToFeed', i);
  }
}
