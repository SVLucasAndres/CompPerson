import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss'],
    template:`
    <ul>
    <li *ngFor="let color of colores">
      <div style="background-color: {{color}};"></div>
    </li>
  </ul>`
})
export class ColorComponent  implements OnInit {
  colores=['#FF5733', '#33FF57', '#5733FF', '#FF3333', '#33FFFF'];
  @Input() color: string ="";//parametro de imagen que recibe una ruta
  constructor() { }

  ngOnInit() {}

}
