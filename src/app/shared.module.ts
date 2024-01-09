// shared.module.ts
import { NgModule } from '@angular/core';
import { Componente2Component } from './componente2/componente2.component';
import { Componente1Component } from './componente1/componente1.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports:[
    IonicModule,
    FormsModule
  ],
  declarations: [
    Componente1Component,
    Componente2Component
  ],
  exports: [
    Componente1Component,
    Componente2Component
  ],
})
export class SharedModule {}
