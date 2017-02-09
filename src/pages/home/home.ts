import { Component } from '@angular/core';

import { NavController, ModalController } from 'ionic-angular';

import {LoginsuccessPage} from '../loginsuccess/loginsuccess';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  receivedData

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    
  }

  login (){

    let modalPage = this.modalCtrl.create(LoginsuccessPage);
    
    modalPage.onDidDismiss(data => {
      this.receivedData = data.dataOne;
    });

    modalPage.present();

  
  }

}
