import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExchangeRateComponent } from '../app/modules/exchange-rate/component/exchange-rate/exchange-rate.component';
import { RegionComponent } from '../app/modules/customer/component/region/region.component';
import { CategoryComponent } from './modules/product/component/category/category.component';
import { CustomerComponent } from './modules/customer/component/customer/customer.component';


const routes: Routes = [
  {path: 'exchange-rate', component: ExchangeRateComponent},
  {path: 'region', component: RegionComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'customer', component: CustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }