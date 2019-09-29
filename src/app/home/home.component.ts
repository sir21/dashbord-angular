import { Component, OnInit } from '@angular/core';
import { fader } from './animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    fader
  ]
})
export class HomeComponent implements OnInit {
  isTable: boolean;

  constructor() {
    this.isTable = true;
  }

  ngOnInit() {
  }

  setActive(event: any) {
    this.isTable = !this.isTable;
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
