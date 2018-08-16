import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Auth } from 'aws-amplify';
import { App } from 'ionic-angular';

import { TabbedHomePage } from '../pages/tabbed-home/tabbed-home';
import { LoginPage } from '../pages/login/login';
import { AccountPage } from '../pages/account/account';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = null;
  @ViewChild(Nav) nav: Nav;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public app: App) {
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


  goToAccount(){
    this.nav.push(AccountPage);
  }

  goToAbout(){
    console.log("opening about");
  }

  goToSafety(){
    console.log("opening safety");
  }

  goToFAQ(){
    console.log("opening FAQ");
  }

  goToPrivacySettings(){
    console.log("opening privacy settings");
  }

  goToPrivacyPolicy(){
    console.log("opening privacy");
  }

  goToTerms(){
    console.log("opening terms");
  }

  goToAppSettings(){
    console.log("opening app settings");
  }

  logout() {
    Auth.signOut()
      .then(() => this.nav.setRoot(LoginPage));
    }
}
