import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { EosProvider } from "./../../providers/eos/eos";
import { HomePage } from "./../home/home";
import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-send",
  templateUrl: "send.html"
})
export class SendPage {
  account: string;
  value: string;

  constructor(
    public navCtrl: NavController,
    public eos: EosProvider,
    public navParams: NavParams,
    public barcodeScanner: BarcodeScanner
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad AccountPage");
  }

  goHome() {
    this.navCtrl.setRoot(HomePage, { account: this.account, key: this.value });
  }

  send() {
    this.eos
      .transfer(this.account, Number.parseFloat(this.value))
      .then(resul => this.navCtrl.pop())
      .catch(err => alert(err));
  }

  scan(){
    this.barcodeScanner.scan()
    .then(result =>  this.account = result.text)
    .catch(err => {
        console.log('Error', err);
    });
  }
}
