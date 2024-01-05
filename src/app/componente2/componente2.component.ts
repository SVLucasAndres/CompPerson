import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header-personalizado',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.scss'],
})
export class Componente2Component  implements OnInit {
  @Input() title: string ="";//parametro de imagen que recibe una ruta
  constructor(private router: Router) {}

  next(tabName: string) {
    this.router.navigate([tabName]);
  }
  prev(tabName: string) {
    this.router.navigate([tabName]);
  }
  ngOnInit() {}

}
