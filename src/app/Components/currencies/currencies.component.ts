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

    //this.rates.setValue(4);
    var rates = new Rates(this.currency.rates.JPY);
   
    //Step 1, getting the base
    var base = this.currency.base;
    console.log("This is the base: " + base);

    console.log("this is the amount value: " + value);

    //console.log("the value for base 1 is: " + this.rates.getBaseRate("JPY"));

    console.log("The value for base is: " + rates.getBaseRate(base));

    //Since the base is only 3 letters we now need a way to get this specific rate;
    //could use a hashmap in rates, use the abbreviations as keys, to get that particular rate

  }

}