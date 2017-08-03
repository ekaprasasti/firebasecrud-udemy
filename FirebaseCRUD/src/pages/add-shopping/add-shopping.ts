import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-add-shopping',
  templateUrl: 'add-shopping.html',
})
export class AddShopping {
	
	// creating a new object
	shoppingItem = {} as ShoppingItem

	shoppingItemRef$: FirebaseListObservable<ShoppingItem[]>

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
		this.shoppingItemRef$ = this.database.list('shopping-list');
	}

	
	addShoppingItem(shoppingItem: ShoppingItem){
		// log the result out to the console
		console.log(shoppingItem);
	
		/*
		 * Create a new anonymous object and convert itemNumber to a number.
		 * Push this to our Firebase database under the 'shopping-list' node.
		 */

		this.shoppingItemRef$.push({
			itemName: this.shoppingItem.itemName,
			itemnumber: Number(this.shoppingItem.itemNumber)	
		});
		
		this.navCtrl.pop();
	}

}
