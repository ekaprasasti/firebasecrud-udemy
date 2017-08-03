import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CREDENTIALS } from './firebase.credentials';
import { AngularFireDatabaseModule } from 'angularfire2/database';
 
import { MyApp } from './app.component';
import { ShoppingList } from '../pages/shopping-list/shopping-list';
import { AddShopping } from '../pages/add-shopping/add-shopping';
import { EditShoppingItem } from '../pages/edit-shopping-item/edit-shopping-item';

@NgModule({
  declarations: [
    MyApp,
    ShoppingList,
		AddShopping,
		EditShoppingItem
	],
  imports: [
    BrowserModule,
		IonicModule.forRoot(MyApp),
		
		// Initialise Angularfire with credentials from the dashboard
		AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
		
		// Import the AngularFireDatabaseModule to use database interactions
		AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ShoppingList,
		AddShopping,
		EditShoppingItem
	],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
