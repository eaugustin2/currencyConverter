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

        constructor(CAD:number, HKD:number, ISK:number, PHP:number, DKK:number, HUF:number, CZK:number, AUD:number, RON:number, SEK:number,IDR:number,INR:number,BRL:number,RUB:number,HRK:number,JPY:number,THB:number,CHF:number,SGD:number,PLN:number,BGN:number,TRY:number,CNY:number,NOK:number,NZD:number,ZAR:number,USD:number,MXN:number,ILS:number,GBP:number,KRW:number,MYR:number){
                this.CAD = CAD;
                this.HKD = HKD;
                this.ISK = ISK;
                this.PHP = PHP;
                this.DKK = DKK;
                this.HUF = HUF;
                this.CZK = CZK;
                this.AUD = AUD;
                this.RON = RON;
                this.SEK = SEK;
                this.IDR = IDR;
                this.INR = INR;
                this.BRL = BRL;
                this.RUB = RUB;
                this.HRK = HRK;
                this.JPY = JPY;
                this.THB = THB;
                this.CHF = CHF;
                this.SGD = SGD;
                this.PLN = PLN;
                this.BGN = BGN;
                this.TRY = TRY;
                this.CNY = CNY;
                this.NOK = NOK;
                this.NZD = NZD;
                this.ZAR = ZAR;
                this.USD = USD;
                this.MXN = MXN;
                this.ILS = ILS;
                this.GBP = GBP;
                this.KRW = KRW;
                this.MYR = MYR;

                this.rateMap.set("CAD",this.CAD);
                this.rateMap.set("HKD",this.HKD);
                this.rateMap.set("ISK",this.ISK);
                this.rateMap.set("PHP",this.PHP);
                this.rateMap.set("DKK",this.DKK);
                this.rateMap.set("HUF",this.HUF);
                this.rateMap.set("CZK",this.CZK);
                this.rateMap.set("AUD",this.AUD);
                this.rateMap.set("RON",this.RON);
                this.rateMap.set("SEK",this.SEK);
                this.rateMap.set("IDR",this.IDR);
                this.rateMap.set("INR",this.INR);
                this.rateMap.set("BRL",this.BRL);
                this.rateMap.set("RUB",this.RUB);
                this.rateMap.set("HRK",this.HRK);
                this.rateMap.set("JPY",this.JPY);
                this.rateMap.set("THB",this.THB);
                this.rateMap.set("CHF",this.CHF);
                this.rateMap.set("SGD",this.SGD);
                this.rateMap.set("PLN",this.PLN);
                this.rateMap.set("BGN",this.BGN);
                this.rateMap.set("TRY",this.TRY);
                this.rateMap.set("CNY",this.CNY);
                this.rateMap.set("NOK",this.NOK);
                this.rateMap.set("NZD",this.NZD);
                this.rateMap.set("ZAR",this.ZAR);
                this.rateMap.set("USD",this.USD);
                this.rateMap.set("MXN",this.MXN);
                this.rateMap.set("ILS",this.ILS);
                this.rateMap.set("GBP",this.GBP);
                this.rateMap.set("KRW",this.KRW);
                this.rateMap.set("MYR",this.MYR);
        }

        /*
        constructor(value:number){
                //this.setValue(1);
                this.JPY = value;
                
                console.log("value of JPY in constructor: " + this.JPY);
                this.rateMap.set("JPY",this.JPY);
                console.log("size of rateMap: " + this.rateMap.size);
        }
        */

        public getRate(currencyTag:string):number{
               
                return this.rateMap.get(currencyTag);
        }
        

        public setValue(value:number):void {
                this.JPY = value;
        }
}