import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddShopping } from './add-shopping';

@NgModule({
  declarations: [
    AddShopping,
  ],
  imports: [
    IonicPageModule.forChild(AddShopping),
  ],
})
export class AddShoppingModule {}
