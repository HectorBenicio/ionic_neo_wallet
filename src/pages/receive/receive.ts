import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ReceivePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-receive',
  templateUrl: 'receive.html',
})
export class ReceivePage {
  account: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.account = navParams.get("account");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReceivePage');
  }

}
