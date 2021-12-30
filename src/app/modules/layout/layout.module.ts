import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { NavComponent } from './component/nav/nav.component';
import { FooterComponent } from './component/footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { ExchangeRateComponent } from '../exchange-rate/component/exchange-rate/exchange-rate.component';
import { RegionComponent } from '../customer/component/region/region.component';
import { CategoryComponent } from '../product/component/category/category.component';

const routes: Routes = [
  {path: 'exchange-rate', component: ExchangeRateComponent},
  {path: 'region', component: RegionComponent},
  {path: 'category', component: CategoryComponent}
];


@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    HeaderComponent,
    NavComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
