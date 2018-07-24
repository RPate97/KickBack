import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { Auth, Logger } from 'aws-amplify';

import { TabbedHomePage } from '../tabbed-home/tabbed-home';
import { LoginPage } from '../login/login';

const logger = new Logger('ConfirmSignIn');

@Component({
  selector: 'page-confirm-signin',
  templateUrl: 'confirmSignIn.html'
})
export class ConfirmSignInPage {
  
  public code: string;
  public user: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = navParams.get('user');
  }

  confirm() {
    Auth.confirmSignIn(this.user, this.code, null)
      .then(() => this.navCtrl.push(TabbedHomePage))
      .catch(err => logger.debug('confirm error', err));
  }

  login() {
    this.navCtrl.push(LoginPage);
  }

}
