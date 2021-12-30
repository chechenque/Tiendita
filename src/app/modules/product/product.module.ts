import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './component/category/category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './component/product/product.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { NgxPhotoEditorModule } from "ngx-photo-editor";


@NgModule({
  declarations: [
    CategoryComponent,
    ProductComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPhotoEditorModule
  ],
  exports: [
    CategoryComponent,
    ProductComponent,
    ProductDetailComponent
  ]
})
export class ProductModule { }
