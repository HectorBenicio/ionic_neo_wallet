import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EosProvider } from '../../providers/eos/eos';



/**
 * Generated class for the TransactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transaction',
  templateUrl: 'transaction.html',
})
export class TransactionPage {
  account: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public eos: EosProvider) {
    //this.account = navParams.get('account')
    this.account = "blockchain12";
    this.eos.setCredentials(this.account, navParams.get('key'))
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransactionPage');
  }

  ionViewWillEnter() {
    debugger;
    let transations = this.eos.getTransactions(this.account);
  }

}
