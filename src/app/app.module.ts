import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ConfirmSignInPage } from '../pages/confirmSignIn/confirmSignIn';
import { ConfirmSignUpPage } from '../pages/confirmSignUp/confirmSignUp';
import { AccountPage } from '../pages/account/account';
import { TabbedHomePageModule } from '../pages/tabbed-home/tabbed-home.module';
import { CommunityPage } from '../pages/community/community';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { DynamoDB } from '../providers/aws.dynamodb';

import Amplify from 'aws-amplify';
const aws_exports = require('../aws-exports').default;

Amplify.configure(aws_exports);

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignupPage,
    ConfirmSignInPage,
    ConfirmSignUpPage,
    AccountPage,
    CommunityPage
  ],
  imports: [
    BrowserModule,
    TabbedHomePageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignupPage,
    ConfirmSignInPage,
    ConfirmSignUpPage,
    CommunityPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DynamoDB
  ]
})
export class AppModule {}

declare var AWS;
AWS.config.customUserAgent = AWS.config.customUserAgent + ' Ionic';
