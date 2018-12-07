import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  account: string = 'andrelopes12';
  key: string = '5J17bY3FjPjQ4LN7UEEo5UqdpV9w1vS66335aeWMzuZBQDCPRAF';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

  goHome() {
    this.navCtrl.setRoot(HomePage, {account: this.account, key:this.key });
  }
}
