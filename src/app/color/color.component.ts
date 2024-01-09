import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss'],
})
export class ColorComponent  implements OnInit {
  @Input() colorsitos: string ="";//parametro de imagen que recibe una ruta
  constructor() { }

  ngOnInit() {}

}
