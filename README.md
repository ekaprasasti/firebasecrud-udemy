# Udemy - Firebase CRUD

This my notes by learn Firebase CRUD from [udemy](https://www.udemy.com/create-a-crud-application-with-ionic-3-and-firebase/learn/v4/overview).

## 1. Creating a Project

Open terminal and type this:

```bash
ionic start FirebaseCRUD blank --v2
```

If terminal answer link this app to your Ionic Dashboard to use tools like ionic view? answer, No!

Get in to working directory:

```bash
cd FirebashCRUD
```

## 2. Installing Dependencies

Type this command to your directory project with install dependencies of firebase and angularfire2:

```bash
npm install firebase angularfire2 --save
```

Open project in your favorite editor.

## 3. Creating firebase account

After login with google account go to https://firebase.google.com and open the console.

Click Add project, with project name is FirebaseCRUD and select your country/region.

## 4. Firebase credentials and project setup

Import angularfire in `app/app.module.ts` file.

```javascript
import { AngularFireModule } from 'angularfire2';
```

Add angularfire credential in `@NgModule({import});`

```javascript
@NgModule({
	import: [
		// Initialise Angularfire with credentials from the dashboard
		AngularFireModule.initializeApp()
	]
});
```

Create file ini `app` folder, name it `firebase.credentials.ts`.

In firebase console, copy our keys credentials and paste it in `firebase.credentials.ts` like this:

```javascript
export const FIREBASE_CREDENTIALS = {
	apiKey: "Your API key",
	authDomain: "your_auth_domain.firebaseapp.com",
	// and more
}
```

Import that code in `app.module.ts`:

```javascript
import { FIREBASE_CREDENTIALS } from './firebase.credentials';
```


Edit angularfire credentials in `@NgModule({import});`

```javascript
@NgModule({
	import: [
		// Initialise Angularfire with credentials from the dashboard
		AngularFireModule.initializeApp(FIREBASE_CREDENTIALS)
	]
});
```

## 5. Creating the shopping list page

Create page from ionic cli in terminal:

```bash
ionic generate page ShoppingList
```

Remove folder `src/pages/home`, and open file `app.component.ts` remove home page.

```javascript
// remove this
import { HomePage } ...
```

and replace the code with this:

```javascript 
import { ShoppingListPage } from '../pages/shopping-list/shopping-list';
```

In class `MyApp` edit root page:

```javascript
rootPage:any = ShoppingListPage;
```

Open file `app.module.ts` and remove import homepage.

```javascript
// remove this
import { HomePage } ...
```

And once again import the shopping list page:

```javascript 
import { ShoppingListPage } from '../pages/shopping-list/shopping-list';
```
Remove homepage ini `@NgModule` declaration and entryComponents, then replace with sopping list page:

```javascript
@NgModule({
	declarations: [
		ShoppingListPage
	]
});
```

```javascript
@NgModule({
	entryComponents: [
		ShoppingListPage
	]
});
```

Open file `src/pages/shopping-list/shooping-list.ts` and remove `@IonicPage()` function.

Open application in the browser with this command:

```bash
ionic lab
```

## 6. Creating the add shopping page and styling

Add another page call `AddShopping`, open terminal and generate page with this command:

```bash
ionic generate page AddShopping
```

Open file `app.module.ts`, and import add shopping page and edit `@NgModule` declarations and entryComponent:

```javascript
import { AddShoppingPage } from '../pages/add-shopping/add-shopping';

@NgModule({
	declarations: [
		AddShoppingPage
	],
	entryComponents: [
		AddShoppingPage
	]
});
```

Open file `shopping-list.html` and edit like this:

```html
<ion-header>
	<ion-navbar color="primary">
		<ion-title>Shopping List</ion-title>
		<ion-buttons end>
			<button ion-button icon-only>
				<ion-icon name="add"></ion-icon>
			</button>
		</ion-buttons>
	</ion-navbar>
</ion-header>
```

Open file `add-shopping.ts` and remove `@IonicPage()` function.

## 7. Navigating to the Add Shopping Page

Add click event trigger tag `<button>` at `shopping-list.html`:

```html
<button ion-button ion-only (click)="navigateToAddShoppingPage()">
	...
</button>
```

Open file `shopping-list.ts` and add function `navigateToAddShoppingPage()`:

```javascript
navigateToAddShoppingPage(){
	// Navigate the user to the AddShoppingPage
	this.navCtrl.push(AddShoppingPage);
}
```

After that import add shopping page:

```javascript
import { AddShoppingPage } from '../add-shopping/add-shopping';
```

Open application in browser and click plus button, and you will navigated to add shopping page.

## 8. Add Shopping Page Template

Open file `add-shopping.html` and edit code like this:

```html
<ion-header>
	<ion-navbar color="primary">
		<ion-title>Add Shopping</ion-title>
	</ion-navbar>
</ion-header>

<ion-content padding>
	<ion-item>
		<ion-label floating>Item Name</ion-label>
		<ion-input type="text"></ion-input>
	</ion-item>

	<ion-item>
		<ion-label floating>Number</ion-label>
		<ion-input type="number"></ion-input>
	</ion-item>

	<button ion-button block></button>	
</ion-content>
```

Now refresh app in browser and look the change.

## 9. Template Form

Create folder and files `src/models/shopping-item/shopping-item.interface.ts`. And code like this:

```javascript
export interface ShoppingItem {
	itemName: string;
	itemNumber: number;
}
```

Import that file and import `shopping-item.interface.ts` in `add-shopping.ts` like this:

```javascript
import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';

export class AddShoppingPage {
	// creating a new object
	shoppingItem = {} as ShoppingItem
}
```

Open file `add-shopping.html` and edit code:

```html
<ion-content padding>
	<ion-item>
		<ion-label floating>Item Name</ion-label>
		<ion-input type="text" [(ngModel)]="shoppingItem.itemName"></ion-input>
	</ion-item>

	<ion-item>
		<ion-label floating>Number</ion-label>
		<ion-input type="number" [(ngModel)]="shoppingItem.itemNumber"></ion-input>
	</ion-item>

	<button ion-button block (click)="addShoppingItem(shoppingItem)">Add Item</button>
</ion-content>
```
In `add-shopping.ts` remove `ionViewDidLoad()` function and in class `AddShoppingPage` type this code:

```javascript
addShoppingItem(shoppingItem: ShoppingItem){
	// log the result out to the console
	console.log(shoppingItem);
}
```

Refresh app in browser and add shopping by form submit and then look at to the console in inspect element.

## 10. Adding Shopping Items to Firebase

Import `AngularFireDatabaseModule` in `app.module.ts` file:

```javascript
import { AngularFireDatabaseModule } from 'angularfire2/database';

@NgModule({
	imports: [
		// Import the AngularFireDatabaseModule to use database interactions
		AngularFireDatabaseModule
	]
});
```

And in `add-shopping.ts` file import `AngularFireDatabase` too:

```javascript
import { AngularFireDatabase } from 'angularfire2/database';
```

Inject shopping page in constructor:

```javascript
export class AddShoppingPage {
	constructor(private database: AngularFireDatabase) { }
}
```

Create referance and import `FirebaseListObservable`.

```javascript
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

export class AddShoppingPage {
	shoppingItemRef$: FirebaseListObservable<ShoppingItem[]>
	
	constructor(private database: AngularFireDatabase){
		this.shoppingItemRef$ = this.database.list('shopping-list');
	}
}
```

Push to database:

```javascript
addShoppingItem(shoppingItem: ShoppingItem){
	/*
		Create a new anonymous object and convert itemNumber to a number.
		Push this to our Firebase database under the 'shopping-list' node.
	*/
	
	this.shoppingItemRef$.push({
		itemName: this.shoppingItem.itemName,
		itemNumber: Number(this.shoppingItem.itemNumber)
	});
}
```

Edit firebase database rules, open database, click tab rules end edit like this:

```javascript
{
	"rules": {
		".read": true,
		".write": true
	}
}
```

Try to submit form add shopping list.

Reset form and back to previous page after submit in `add-shopping.ts` 

```javascript
// Reset our ShoppingItem
this.shoppingItem = {} as ShoppingItem;

// Navigate the user back to the ShoppingListPage
this.navCtrl.pop();
```

## 11. Displaying Shopping List Data

Open `shopping-list.ts` and create shopping list reference, then import shopping item interface:

```javascript
import { FirebaseListObservable } from 'angularfire2/database';
import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';

export class ShoppingListPage {
	shoppingListRef$:	 FirebaseListObservable<ShoppingItem[]>
}
```

Import angularfire database:

```javascript
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

export class ShoppingListPage {
	constructor(private database: AngularFireDatabase){
		/*
			Pointing shoppingListRef$ at Firebase -> 'shopping-list' node. That means not only can we push things
			from this reference to the database, but ALSO we have access to everything inside of that node.
		*/
		this.shoppingListRef$ = this.database.list('shopping-list');
	}
}
```

Listing on view `shopping-list.html`:

```html
<ion-content padding>
	<ion-list>
		<!-- Repeat the ion-item as many items that we have inside of our shopping list. -->
		<ion-item *ngFor="let item of shoppingListRef$ | async">
			<h2>Item name: {{item.itemName}}</h2>
			<h3>Amount: {{item.itemNumber}}</h3>
		</ion-item>
	</ion-list>
</ion-content>
```

Refresh app in browser. And test with add new shopping list.

## 12. Removing Shopping Items

Back to `shopping-list.ts` file, and make function `selectShoppingItem()`:

```javascript
selectShoppingItem(shoppingItem: ShoppingItem) {
	/*
		Display an ActionSheet that gives the user the following options:
		1. Edit the shoppingItem
		2. Delete the shoppingItem
		3. Cancel selection
	*/

	this.actionSheetCtrl.create({
		title: `${shoppingItem.itemName}`,
		buttons: [
			{
				text: 'Edit',
				handler: () => {
					// Send the user to the EditShoppingItemPage and pass the key as a parameter
				}
			},
			{
				text: 'Delete',
				role: 'destructive',
				handler: () => {
					// Delete the current ShoppingItem, passed in via the parameter
					this.shoppingListRef$.remove(shoppingItem.$key);	
				}
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
```

Import and Add `ActionSheet` at constructor:

```javascript
import {ActionSheetController} from 'ionic-angular';

export class ShoppingListPage {
	constructor(private actionSheetCtrl: ActionSheetController){}
}
```

Add action button in view `shopping-list.html` file:

```html
<ion-content padding>
	<ion-list>
		<ion-item *ngFor="let item of shoppingListRef$ | async" (click)="selectShoppingItem(item)">
			...
		</ion-item>
	</ion-list>
</ion-content>
```

Open `shopping-item.interface.ts` and add `$key` reference from firebase, sign `?` is remark for optional:

```javascript
export interface ShoppingItem {
	$key?: string;
	itemName: string;
	itemNumber: number;
}
```

Refresh browser and click in list item, then test with delete some item.

## 13. Creating an EditShoppingItemPage and Passing NavParams

Open terminal and type this command:

```bash
ionic generate page EditShoppingItem
```

Open file `edit-shopping-item.ts` and remove ionic decorator with `@IonicPage()` function if we don't use lazy loading.

Open file `app.module.ts` and import these new page:

```javascript
import { EditShoppingItemPage } from '../pages/edit-shopping-item';

@NgModule({
	declarations: [
		EditShoppingItemPage
	],
	entryComponents: [
		EditShoppingItemPage
	]
});
```

Open file `edit-shopping-item.ts`, and import AngularFireDatabase:

```javascript
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

import { ShoppingItem } from '../../models/shopping-item/shopping-item.interface';

export class EditShoppingItemPage {
	shoppingItemRef$: FirebaseObjectObservable<ShoppingItem>;

	constructor(private database: AngularFireDatabase){
		// Creating an EditShoppingItemPage and Passing NavParams				
		const shoppingItemId = this.navParams.get('shoppingItemId');
	
		// Set the scope of our Firebase Object equal to our selected item	
		this.shoppingItemRef$ = this.database.object(`shopping-list/${shoppingItemId}`);
	}
} 
```

Back to `shopping-list.ts` and inside `selectShoppingItem()` function, and import EditShoppingItem:

```javascript
import { EditShoppingItemPage } from '../edit-shopping-item/edit-shopping-item';

buttons: [
	{
		text: 'Edit',
		handler: () => {
			// Send the user to the EditShoppingItemPage and pass the key as a parameter
			this.navCtrl.push(EditShoppingItemPage, { shoppingItemId: shoppingItem.$key });

		}
	},
```

Debug `shoppingItemId` in `edit-shopping-item.ts` constructor:

```javascript
// Log out the navParam
console.log(shoppingItemId);
```

Refresh app in browser, if we choose selcted item and click edit then look at the inspect element, we can find the `id` of the item in the console.

## 14. Edit Shopping Items

Let's take our template in edit shopping item page. Open `edit-shopping-item.html` and edit like this:

```html
<ion-header>
	<ion-navbar color="primary">
		<ion-title>EditShoppingItem</ion-title>
	</ion-navbar>
</ion-header>

<ion-content padding>
	<ion-item>
		<ion-label floating>Item Name</ion-label>
		<ion-input type="text" [(ngModel)]="shoppingItem.itemName"></ion-input>
	</ion-item>

	<ion-item>
		<ion-label floating>Number</ion-label>
		<ion-input type="number" [(ngModel)]="shoppingItem.itemNumber"></ion-input>
	</ion-item>

	<button ion-button block>Edit Item</button>
</ion-content>
```

Open `edit-shopping-item.ts` and reference `shoppingItem` in EditShoppingItemPage class:

```javascript
export class EditShoppingItemPage {
	shoppingItem = {} as ShoppingItem;
}
```

Sign these reference with async pipe:

```javascript
constructor(){
	// Subscirbe to the Object and assign the result to this.shoppingItem
	this.shoppingItemRef$.subscribe(
		shoppingItem => this.shoppingItem = shoppingItem
	);
}
```

Create function for update the reference update of firebase:

```javascript
editShoppingItem(shoppingItem: ShoppingItem){
	// Update our Firebase node with new item data
	this.shoppingItemRef$.update(shoppingItem);

	// Send the user back to the ShoppingListPage
	this.navCtrl.pop();
}
```

Edit button `Edit Item` in `edit-shopping-item.html`:

```html
<button ion-button block (click)="editShoppingItem(shoppingItem)">Edit Item</button>
```

Refresh app in browser, and try edit item and back to the list. Now we able to edit item in our application.

Remove the `ionViewDidLoad()` function, and edit `edit-shopping-item.html` header like this:

```html
<ion-header>
	<ion-navbar color="primary">
		<ion-title>{{shoppingItem.itemName}}</ion-title>
	</ion-navbar>
</ion-header>
```

Refresh app again and try edit some item and look at the data binding in header.

Unsubscribe our object observable with import rxjs in `edit-shopping-item.ts` file:

```javascript
import { Subscription } from 'rxjs/Subscription';

export class EditShoppingItemPage {
	shoppingItemSubscription: Subscription;
}
```

Edit `this.shoppingItemRef$.subscribe()` in our constructor:

```javascript
this.shoppingItemSubscription = this.shoppingItemRef$.subscribe(
	shoppingItem => this.shoppingItem = shoppingItem
);
```

Add function `ionViewWillLeave()`:

```javascript
ionViewWillLeave() {
	// Unsubscribe from the Observable when leaving the page
	this.shoppingItemSubscription.unsubscribe();
}
```

The benefits of using async pipe in `shopping-list.html` is subscribtion and unsubscription handling automatically by angular from the observable.
