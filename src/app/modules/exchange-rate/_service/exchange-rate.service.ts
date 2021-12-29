import { Injectable } from '@angular/core';
import { ExchangeRate } from '../_model/exchange-rate';
import { HttpClient } from '@angular/common/http';
import { ApisURI } from '../../../shared/apis-uri';

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateService {

  private apiURI = ApisURI.exchangeRateURI;

  constructor(private http: HttpClient) {}

  getExchangeRate(rate: string){
    this.apiURI = this.apiURI.replace("{rate}",rate);
    return this.http.get<ExchangeRate>(this.apiURI);
  }
}
