import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

/*
  Generated class for the Loginsuccess page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-loginsuccess',
  templateUrl: 'loginsuccess.html'
})
export class LoginsuccessPage {

  buttonText

  constructor(private navCtrl: NavController, private navParams: NavParams, private vc: ViewController) {
    this.buttonText = this.navParams.get('myString');
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginsuccessPage');
  }

  popThis (){
    let data = {
      dataOne: "Subash"
    };
    this.vc.dismiss(data);
  }

}
