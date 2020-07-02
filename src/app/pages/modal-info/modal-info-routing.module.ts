import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalInfoPage } from './modal-info.page';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({

  imports: [ CommonModule,
             FormsModule,
             IonicModule ],
  declarations: [ ModalInfoPage ]          
 
})
export class ModalInfoPageRoutingModule {}
