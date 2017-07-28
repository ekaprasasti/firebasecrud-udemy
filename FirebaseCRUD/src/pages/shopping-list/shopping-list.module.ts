import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShoppingList } from './shopping-list';

@NgModule({
  declarations: [
    ShoppingList,
  ],
  imports: [
    IonicPageModule.forChild(ShoppingList),
  ],
})
export class ShoppingListModule {}
