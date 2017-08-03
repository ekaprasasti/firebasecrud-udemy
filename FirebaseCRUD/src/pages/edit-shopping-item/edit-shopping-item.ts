import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Subscription } from 'rxjs/Subscription';

import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';

@Component({
  selector: 'page-edit-shopping-item',
  templateUrl: 'edit-shopping-item.html',
})
export class EditShoppingItem {
	
	shoppingItem = {} as ShoppingItem;

	shoppingItemRef$: FirebaseObjectObservable<ShoppingItem>;

	shoppingItemSubscription: Subscription;

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
		// Creating an EditShoppingItemPage and Passing NavParams
    const shoppingItemId = this.navParams.get('shoppingItemId');

		// Log out the navParam
		console.log(shoppingItemId);

    // Set the scope of our Firebase Object equal to our selected item
    this.shoppingItemRef$ = this.database.object(`shopping-list/${shoppingItemId}`)		
  
		// Subscribe to the Object and assign the result to this.shoppingItem
		this.shoppingItemSubscription = this.shoppingItemRef$.subscribe(
			shoppingItem => this.shoppingItem = shoppingItem
		);
	}

	editShoppingItem(shoppingItem: ShoppingItem){
  	// Update our Firebase node with new item data
  	this.shoppingItemRef$.update(shoppingItem);

  	// Send the user back to the ShoppingListPage
  	this.navCtrl.pop();
	}	

	ionViewWillLeave() {
		// Unsubscribe from the Observable when leaving the page
		this.shoppingItemSubscription.unsubscribe();
	}
}
