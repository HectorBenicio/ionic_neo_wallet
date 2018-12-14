import { ReceivePage } from './../receive/receive';
import { SendPage } from './../send/send';
import { EosProvider } from './../../providers/eos/eos';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TransactionPage } from '../transaction/transaction';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  account: string;
  balance: string;
  balanceUSD: string;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public eos: EosProvider) {
    this.account = navParams.get('account')
    this.eos.setCredentials(this.account, navParams.get('key'))
    this.eos.getBalance()
    .then(result => this.balance = result[0])
    .catch(err => alert(err))
  }

  openPage(url) {
    console.log('open url')
  }

  closeMenu(){
    console.log('Fechou')
  }

  send(){
    this.navCtrl.push(SendPage, {account: this.account});
  }

  receive(){
    this.navCtrl.push(ReceivePage, {account: this.account});
  }

  ionViewWillEnter(){
    this.eos.getBalance()
    .then(result => {
      this.balance = result[0]
      this.eos.getValueUSD(Number.parseFloat(this.balance.split(' ')[0]))
      .then(result => this.balanceUSD = result.toString())
    }).catch(err => alert(err))
  }

  goReceive(){
    this.navCtrl.push(ReceivePage, {account: this.navParams.get("account")});
  }

  goTransaction(){
    this.navCtrl.push(TransactionPage, {account: this.navParams.get("account")});
  }
}
