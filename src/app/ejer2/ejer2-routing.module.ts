import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { Ejer2Page } from './ejer2.page';

const routes: Routes = [
  {
    path: '',
    component: Ejer2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ejer2PageRoutingModule {
  
}
