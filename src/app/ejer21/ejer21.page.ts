import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ejer21',
  templateUrl: './ejer21.page.html',
  styleUrls: ['./ejer21.page.scss'],
})
export class Ejer21Page implements OnInit {

  constructor(private router: Router) { }
  next() {
    this.router.navigate(['ejer3']);
  }
  prev() {
    this.router.navigate(['ejer2']);
  }

  ngOnInit() {
  }

}
