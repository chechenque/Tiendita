import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApisURI } from 'src/app/shared/apis-uri';
import { ProductImage } from '../_model/productImage';

@Injectable({
  providedIn: 'root'
})
export class ProductImageService {

  private apiURI = ApisURI.dwf20221apiURI;
  private resource = "/product-image";
  
  constructor(
    private http: HttpClient
  ) { }

  getProductImages(id_product: number){
    return this.http.get<ProductImage>(this.apiURI + this.resource + `/${id_product}`);
  }

  createProductImage(product_image: ProductImage){
    return this.http.post(this.apiURI + this.resource,product_image);
  }

  deleteProductImage(id_product_image: number){
    return this.http.delete(this.apiURI + this.resource + `/${id_product_image}`);
  }
}
