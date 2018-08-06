import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CameraPostPage } from './camera-post';

@NgModule({
  declarations: [
    CameraPostPage,
  ],
  imports: [
    IonicPageModule.forChild(CameraPostPage),
  ],
})
export class CameraPostPageModule {}
