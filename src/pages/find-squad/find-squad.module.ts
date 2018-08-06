import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FindSquadPage } from './find-squad';

@NgModule({
  declarations: [
    FindSquadPage,
  ],
  imports: [
    IonicPageModule.forChild(FindSquadPage),
  ],
})
export class FindSquadPageModule {}
