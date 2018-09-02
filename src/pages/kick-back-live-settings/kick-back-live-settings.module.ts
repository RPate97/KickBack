import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KickBackLiveSettingsPage } from './kick-back-live-settings';

@NgModule({
  declarations: [
    KickBackLiveSettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(KickBackLiveSettingsPage),
  ],
})
export class KickBackLiveSettingsPageModule {}
