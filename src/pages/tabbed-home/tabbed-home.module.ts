import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabbedHomePage } from './tabbed-home';

@NgModule({
  declarations: [
    TabbedHomePage,
  ],
  imports: [
    IonicPageModule.forChild(TabbedHomePage),
  ],
})
export class TabbedHomePageModule {}
