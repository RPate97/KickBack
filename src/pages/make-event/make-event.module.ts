import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MakeEventPage } from './make-event';

@NgModule({
  declarations: [
    MakeEventPage,
  ],
  imports: [
    IonicPageModule.forChild(MakeEventPage),
  ],
})
export class MakeEventPageModule {}
