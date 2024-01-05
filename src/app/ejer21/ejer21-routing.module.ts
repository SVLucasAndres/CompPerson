import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { Ejer21Page } from './ejer21.page';

const routes: Routes = [
  {
    path: '',
    component: Ejer21Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Ejer21PageRoutingModule {
  constructor(private router: Router) {}

  next() {
    this.router.navigate(['ejer21']);
  }
  prev() {
    this.router.navigate(['home']);
  }
}
