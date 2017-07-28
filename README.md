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
	authDomain: "your_auth_domain.firebaseapp.com,
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
