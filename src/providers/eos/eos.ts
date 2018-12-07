import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import Eos from "eosjs";
import { ValueTransformer } from "@angular/compiler/src/util";

/*
  Generated class for the EosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EosProvider {
  eos: any;
  account: string;
  key: string;

  constructor(public http: HttpClient) {

    // 
    console.log("Hello EosProvider Provider");

    this.eos = Eos({
      httpEndpoint: "http://jungle.eosgen.io",
      chainId: "e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473"
    });
  }

setCredentials(account: string, key: string){
  this.account = account;
  this.key = key;
}

  getBalance() {
    return this.eos.getCurrencyBalance('eosio.token', this.account, 'EOS');
  }

  transfer(toAccount: string, value: number) {
    const options = {
      keyProvider: this.key
    }
    return this.eos.transfer(this.account, toAccount, `${value.toFixed(4)} EOS`, '', options)
  }

  
  getValueUSD(value: number){
    let endpoint = "https://api.coinmarketcap.com/v2/ticker/1765/";
    return new Promise(resolve => {
      this.http.get(endpoint)
      .subscribe(result => {
        const usdValue = (result["data"].quotes.USD.price * value).toFixed(2);
        resolve(usdValue);
      }, err => {
        console.log(err);
      });
    });
  }
}
