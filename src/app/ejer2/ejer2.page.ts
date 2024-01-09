import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ejer2',
  templateUrl: './ejer2.page.html',
  styleUrls: ['./ejer2.page.scss'],
})
export class Ejer2Page implements OnInit {

  constructor(private router: Router) {}

  next() {
    this.router.navigate(['ejer21']);
  }
  prev() {
    this.router.navigate(['home']);
  }

  ngOnInit() {
  }

}
