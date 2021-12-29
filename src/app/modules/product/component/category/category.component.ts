import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Category } from '../../_model/category';
import { CategoryService } from '../../_service/category.service';

declare var $: any;

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[] = [];
  category:Category = new Category();

  formulario = this.formBuilder.group({
    id_category: [''],
    category: ['',Validators.required]
  });

  post_category = false;
  submitted = false;

  constructor(
    private category_service: CategoryService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getCategorys();
  }

  getCategorys(){
    this.category_service.getCategorys().subscribe(
      res => {
        this.categories = res;
        console.log(this.categories);
      },
      err => console.log(err)
    )
  }

  getCategory(id_category: number){
    this.category_service.getCategory(id_category).subscribe(
      res => {
        this.category = res;
        console.log(this.category);
      },
      err => console.log(err)
    )
  }

  onSubmit(){
    this.submitted = true;
    if(this.post_category){
      this.category_service.createCategory(this.formulario.value).subscribe(
        res => {
          this.getCategorys();
          this.closeModal();
        },
        err => console.log(err)
      )
    }else{
      this.category_service.updateCategory(this.formulario.value).subscribe(
        res => {
          this.getCategorys();
          this.closeModal();
        },
        err => console.log(err)
      )
    }
  }


  createCategory(){
    this.post_category = true;
    this.formulario.reset();
    $("#category_modal").modal("show");
  }

  updateCategory(category: Category){
    this.post_category = false;
    this.formulario.controls['id_category'].setValue(category.id_category);
  }

  deleteCategory(id_category:number){
    this.category_service.deleteCategory(id_category).subscribe(
      res =>{
        this.getCategorys();
      },
      err => console.log(err)
    )
  }

  get f(){
    return this.formulario.controls;
  }

  closeModal(){
    $("#category_modal").modal("hide");
    this.submitted = false;
  }

}
