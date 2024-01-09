import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'ejer2',
    loadChildren: () => import('./ejer2/ejer2.module').then( m => m.Ejer2PageModule)
  },
  {
    path: 'ejer21',
    loadChildren: () => import('./ejer21/ejer21.module').then( m => m.Ejer21PageModule)
  },
  {
    path: 'ejer3',
    loadChildren: () => import('./ejer3/ejer3.module').then( m => m.Ejer3PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
