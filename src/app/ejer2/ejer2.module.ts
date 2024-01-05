import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ejer2PageRoutingModule } from './ejer2-routing.module';

import { Ejer2Page } from './ejer2.page';
import { Componente1Component } from '../componente1/componente1.component';
import { Componente2Component } from '../componente2/componente2.component';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ejer2PageRoutingModule,
    SharedModule
  ],
  declarations: [Ejer2Page]
})
export class Ejer2PageModule {}
