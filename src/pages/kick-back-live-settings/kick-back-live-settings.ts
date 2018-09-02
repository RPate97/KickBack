import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the KickBackLiveSettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kick-back-live-settings',
  templateUrl: 'kick-back-live-settings.html',
})
export class KickBackLiveSettingsPage {
  public searchDistance;
  public groupSize;
  public allGenders;
  public myGender;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.searchDistance = navParams.get('searchDistance');
    this.groupSize = navParams.get('groupSize');
    this.allGenders = navParams.get('allGenders');
    this.myGender = navParams.get('myGender');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KickBackLiveSettingsPage');
  }

}
