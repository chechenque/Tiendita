export class ExchangeRate{
    provider!:string;
    WARNING_UPGRADE_TO_V6!:string;
    terms!:string;
    base!:string;
    date!:Date;
    time_last_updated!:number;
    rates!: Map<"rate","value">;

    constructor(){
        this.provider = "";
        this.WARNING_UPGRADE_TO_V6 = "";
        this.terms = "";
        this.base = "";
        this.date = new Date;
        this.time_last_updated = 0;
        this.rates = new Map;
    }
}