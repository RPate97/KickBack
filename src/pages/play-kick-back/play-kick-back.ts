import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PlayKickBackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-play-kick-back',
  templateUrl: 'play-kick-back.html',
})
export class PlayKickBackPage {

  userData = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.userData = navParams.get('chatInfo');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayKickBackPage');
  }

  goToFindSquad(){
    this.navCtrl.push("FindSquadPage", {
      userData: this.userData
    });
  }

  goToMakeEvent(){
    this.navCtrl.push("MakeEventPage", {
      userData: this.userData
    });
  }

}
