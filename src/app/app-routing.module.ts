import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExchangeRateComponent } from '../app/modules/exchange-rate/component/exchange-rate/exchange-rate.component';
const routes: Routes = [
  {path: 'exchange-rate', component: ExchangeRateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }