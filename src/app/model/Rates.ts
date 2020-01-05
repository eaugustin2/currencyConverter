export class Rates{
       
        public rateMap = new Map();


        CAD:number;
        HKD:number;
        ISK:number;
        PHP:number;
        DKK:number;
        HUF:number;
        CZK:number;
        AUD:number;
        RON:number;
        SEK:number;
        IDR:number;
        INR:number;
        BRL:number;
        RUB:number;
        HRK:number;
        JPY:number;
        THB:number;
        CHF:number;
        SGD:number;
        PLN:number;
        BGN:number;
        TRY:number;
        CNY:number;
        NOK:number;
        NZD:number;
        ZAR:number;
        USD:number;
        MXN:number;
        ILS:number;
        GBP:number;
        KRW:number;
        MYR:number;

        constructor(value:number){
                //this.setValue(1);
                this.JPY = value;
                this.rateMap.set("CAD",this.CAD);
                console.log("value of JPY in constructor: " + this.JPY);
                this.rateMap.set("JPY",this.JPY);
                console.log("size of rateMap: " + this.rateMap.size);
        }

        public getBaseRate(base:string):number{
                console.log("value of base inside getBaseRate: " + base);
                console.log("Does the map have JPY: " + this.rateMap.has(base));
                console.log("getBaseRate method");
                console.log("value retrieved from rateMap: " + this.rateMap.get(base));
                return this.rateMap.get(base);
        }

        public setValue(value:number):void {
                this.JPY = value;
        }
}