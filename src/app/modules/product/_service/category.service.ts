import { Injectable } from '@angular/core';
import { Category } from '../_model/category';
import { HttpClient } from '@angular/common/http';
import { ApisURI } from '../../../shared/apis-uri';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  private apiURI = ApisURI.dwf20221apiURI;
  private resource = "/category";

  constructor(
    private http: HttpClient
  ) { }

  getCategorys(){
    return this.http.get<Category[]>(this.apiURI + this.resource);
  }

  getCategory(id_category: number){
    return this.http.get<Category>(this.apiURI+this.resource+`/${id_category}`);
  }

  createCategory(category: Category){
    return this.http.post(this.apiURI+this.resource,category);
  }

  updateCategory(category: Category){
    return this.http.put(this.apiURI+this.resource+`/${category.id_category}`,category);
  }

  deleteCategory(id_category: number){
    return this.http.delete(this.apiURI+this.resource+`/${id_category}`);
  }

}
