import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    
  }

  showAlert(){
let alert = this.alertCtrl.create({
title: 'New checklist!',
message: 'Hellor Subash',
buttons: [
  {
    text: 'Close me User!'
  }
]
});
alert.present();
  }

}
