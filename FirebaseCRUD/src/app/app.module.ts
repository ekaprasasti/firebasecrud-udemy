import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CREDENTIALS } from './firebase.credentials';

import { MyApp } from './app.component';
import { ShoppingList } from '../pages/shopping-list/shopping-list';
import { AddShopping } from '../pages/add-shopping/add-shopping';

@NgModule({
  declarations: [
    MyApp,
    ShoppingList,
		AddShopping
	],
  imports: [
    BrowserModule,
		IonicModule.forRoot(MyApp),
		// Initialise Angularfire with credentials from the dashboard
		AngularFireModule.initializeApp(FIREBASE_CREDENTIALS)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ShoppingList,
		AddShopping
	],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
