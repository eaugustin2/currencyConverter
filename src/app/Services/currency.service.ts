import { Injectable } from '@angular/core';
import { Currency } from '../model/Currency';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

//This is a service class used to make http requests for data
@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  //currencies:Currency;
  apiUrl:string = " https://api.exchangeratesapi.io/latest?base=JPY";
  constructor(private http:HttpClient) { }

  
  getCurrencies():Observable<Currency>{
    return this.http.get<Currency>(this.apiUrl);
  }

 public getCurrency() {
   return this.http.get(this.apiUrl);
 }

}
