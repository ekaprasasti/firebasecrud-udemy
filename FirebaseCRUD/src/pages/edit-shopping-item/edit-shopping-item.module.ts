import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditShoppingItem } from './edit-shopping-item';

@NgModule({
  declarations: [
    EditShoppingItem,
  ],
  imports: [
    IonicPageModule.forChild(EditShoppingItem),
  ],
})
export class EditShoppingItemModule {}
