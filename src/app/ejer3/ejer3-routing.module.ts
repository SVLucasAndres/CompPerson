import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Ejer3Page } from './ejer3.page';

const routes: Routes = [
  {
    path: '',
    component: Ejer3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ejer3PageRoutingModule {}
