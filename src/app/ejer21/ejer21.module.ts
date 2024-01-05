import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ejer21PageRoutingModule } from './ejer21-routing.module';

import { Ejer21Page } from './ejer21.page';
import { Componente2Component } from '../componente2/componente2.component';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ejer21PageRoutingModule,
    SharedModule
  ],
  declarations: [Ejer21Page]
})
export class Ejer21PageModule {}
