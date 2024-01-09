import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.scss'],
})
export class Componente1Component  implements OnInit {
  @Input() image: string ="";//parametro de imagen que recibe una ruta
  @Input() nombre: string="";//parametro de descripción recibe un texto
  @Input() info: string="";//parametro de descripción recibe un texto
  constructor() { }

  ngOnInit() {}

}
