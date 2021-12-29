import { Component, OnInit } from '@angular/core';
import { ExchangeRate } from '../../_model/exchange-rate';
import { ExchangeRateService } from '../../_service/exchange-rate.service';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.css']
})

export class ExchangeRateComponent implements OnInit {

  exchange_rate = new ExchangeRate();
  formulario = this.formBuilder.group({
    rate: ['',Validators.required]
  });

  constructor(
    private exchange_rate_service: ExchangeRateService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getExchangeRate("USD")
  }

  ngSubmit(){
    console.log(this.formulario.controls['rate'].value);
    var rate = this.formulario.controls['rate'].value;
    this.getExchangeRate(rate);
  }

  getExchangeRate(rate: string){
    this.exchange_rate_service.getExchangeRate(rate).subscribe(
      res => {
        console.log(res);
        this.exchange_rate = res;
      },
      err => console.log(err)
    );
  }
}
