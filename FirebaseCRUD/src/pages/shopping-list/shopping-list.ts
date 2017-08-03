import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { AddShopping } from '../add-shopping/add-shopping';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';
import { EditShoppingItem } from '../edit-shopping-item/edit-shopping-item';

@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingList {

	shoppingListRef$: FirebaseListObservable<ShoppingItem[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase, private actionSheetCtrl: ActionSheetController) {
		/*
		 * Pointing shoppingListRef$ at Firebase -> 'shopping-list' node.
		 * That means not only can we push things from this reference to the database, 
		 * but ALSO we have access to everything inside of that node.
		 */
		
		this.shoppingListRef$ = this.database.list('shopping-list');
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShoppingList');
  }

	navigateToAddShoppingPage(){
		// Navigate the use to the AddShoppingPage
		this.navCtrl.push(AddShopping);
	}
	
	/*
		Display an ActionSheet that gives the user the following options:
    1. Edit the shoppingItem
    2. Delete the shoppingItem
    3. Cancel selection
	*/
	selectShoppingItem(shoppingItem: ShoppingItem){
		this.actionSheetCtrl.create({
			title: `${shoppingItem.itemName}`,
			buttons: [
				{
					text: 'Edit',
					handler: () => {
						// Send the user to the EditShoppingItemPage and pass the key as a parameter
						this.navCtrl.push(EditShoppingItem, { shoppingItemId: shoppingItem.$key });
					}
				},
				{
					text: 'Delete',
					role: 'destructive',
					handler: () => {
						// Delete the current ShoppingItem, passed in via the parameter
						this.shoppingListRef$.remove(shoppingItem.$key);
					},
				},
				{
					text: 'Cancel',
					role: 'cancel',
					handler: () => {
						console.log('The user has selected the cancel button');
					}
				}
			]	
		}).present();
	}

}
