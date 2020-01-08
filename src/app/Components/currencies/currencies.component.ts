import { Component, OnInit, Input } from '@angular/core';
import { Currency } from '../../model/Currency';
import { CurrencyService } from '../../Services/currency.service';
import { Observable } from 'rxjs';
import { Rates } from 'src/app/model/Rates';
import { stringify } from 'querystring';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent implements OnInit {

  currency:Currency = new Currency; //have to make sure this is initialized as a new instance like in java 
  //rates:Rates = new Rates;
  rates:Rates; 
  userValue:string = '';
  result:number = 0;
  exchangeRate:number = 0;
  exchangeFrom:number;
  exchangeTo:number;
  ratesArray = this.currency.ratesArray;

  constructor(private currencyService:CurrencyService) { }

  ngOnInit() {
   //subscribe method used to get data of type observable from api url
   
   this.currencyService.getCurrencies()
      .subscribe(currency => {
     //console.log(currencies);
     this.currency = currency;

     //console.log(this.currencies);
   })

}

  /*
  Its better to use #value method to access user input than using event object
  */

   userInput(value:number):void {

    this.rates = new Rates(this.currency.rates.CAD,this.currency.rates.HKD,this.currency.rates.ISK,this.currency.rates.PHP,this.currency.rates.DKK,this.currency.rates.HUF,this.currency.rates.CZK,this.currency.rates.AUD,this.currency.rates.RON,this.currency.rates.SEK,this.currency.rates.IDR,this.currency.rates.INR,this.currency.rates.BRL,this.currency.rates.RUB,this.currency.rates.HRK,this.currency.rates.JPY,this.currency.rates.THB,this.currency.rates.CHF,this.currency.rates.SGD,this.currency.rates.PLN,this.currency.rates.BGN,this.currency.rates.TRY,this.currency.rates.CNY,this.currency.rates.NOK,this.currency.rates.NZD,this.currency.rates.ZAR,this.currency.rates.USD,this.currency.rates.MXN,this.currency.rates.ILS,this.currency.rates.GBP,this.currency.rates.KRW,this.currency.rates.MYR);

    var base = this.currency.base;
    console.log("This is the base: " + base);

    this.exchangeFrom = this.rates.getBaseRate(base);

    //need another for exchange to

    console.log("this is the amount value: " + value);

    //console.log("the value for base 1 is: " + this.rates.getBaseRate("JPY"));

    console.log("The value for base is: " + this.rates.getBaseRate(base));

    
    this.exchangeTo = this.rates.getBaseRate("USD");

    this.exchangeRate = this.exchangeTo/this.exchangeFrom;

    this.result = value * this.exchangeRate;
    //Since the base is only 3 letters we now need a way to get this specific rate;
    //could use a hashmap in rates, use the abbreviations as keys, to get that particular rate

  }

}