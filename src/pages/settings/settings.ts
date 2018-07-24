import { Component } from '@angular/core';
import { App } from 'ionic-angular';
import { Auth } from 'aws-amplify';

import { LoginPage } from '../login/login';
import { AccountPage } from '../account/account';
import { TabbedHomePage } from '../tabbed-home/tabbed-home';

@Component({
  templateUrl: 'settings.html'
})
export class SettingsPage {

  public accountPage = AccountPage;
  public tabbedHome = TabbedHomePage;
  constructor(public app: App) {
  }

  logout() {
    Auth.signOut()
      .then(() => this.app.getRootNav().setRoot(LoginPage));
  }

}
