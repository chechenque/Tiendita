import { Injectable } from '@angular/core';
import { Customer } from '../_model/customer';
import { HttpClient } from '@angular/common/http';
import { ApisURI } from "../../../shared/apis-uri";
import { CustomerImage } from '../_model/customerImage';
import { Region } from '../_model/region';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiURI = ApisURI.dwf20221apiURI;
  private resource = "/customer";

  constructor(
    private http: HttpClient
  ) { }

  getCustomers(){
    return this.http.get<Customer[]>(this.apiURI+ this.resource);
  }

  getCustomer(rfc:string){
    return this.http.get<Customer>(this.apiURI+this.resource+"/"+rfc);
  }

  createCustomer(customer:Customer){
    return this.http.post(this.apiURI+this.resource,customer);
  }

  updateCustomer(customer:Customer){
    return this.http.put(this.apiURI+this.resource+"/"+customer.id_customer,customer);
  } 

  deleteCustomer(id_customer:number){
    return this.http.delete(this.apiURI+this.resource+"/"+id_customer);
  }

  updateCustomerImage(id_customer:number, customerImage: CustomerImage){
    return this.http.put(this.apiURI + this.resource+"/"+id_customer+"/image",customerImage);
  }

  updateCustomerRegion(id_customer:number, region: Region){
    return this.http.put(this.apiURI + this.resource+"/"+id_customer+"/region",region);
  }

}
