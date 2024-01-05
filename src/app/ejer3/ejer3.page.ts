import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ejer3',
  templateUrl: './ejer3.page.html',
  styleUrls: ['./ejer3.page.scss'],
})
export class Ejer3Page implements OnInit {
  
  constructor(private router: Router) { }
  prev() {
    this.router.navigate(['ejer21']);
  }
  ngOnInit() {
  }

}
