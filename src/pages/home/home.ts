import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  currentTime

  constructor(public navCtrl: NavController) {
    this.currentTime = new Date().getFullYear();
  }

}
