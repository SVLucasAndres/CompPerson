import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Ejer3PageRoutingModule } from './ejer3-routing.module';

import { Ejer3Page } from './ejer3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ejer3PageRoutingModule
  ],
  declarations: [Ejer3Page]
})
export class Ejer3PageModule {}
