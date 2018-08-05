import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CommunityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-community',
  templateUrl: 'community.html',
})
export class CommunityPage {
  chat: any = {};
  chatMessages: any = [
    {
      Name: "Ryan",
      Message: "hey that's pretty good",
      Hearts: 3
    },
    {
      Name: "Drake",
      Message: "Get out of here dude",
      Hearts: 6
    }
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.chat = navParams.get('chatInfo');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommunityPage');
  }

}
