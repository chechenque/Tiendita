import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionComponent } from './component/region/region.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerComponent } from './component/customer/customer.component';
import { CustomerDetailComponent } from './component/customer-detail/customer-detail.component';



@NgModule({
  declarations: [
    RegionComponent,
    CustomerComponent,
    CustomerDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    RegionComponent,
    CustomerComponent,
    CustomerDetailComponent
  ]
})
export class CustomerModule { }
