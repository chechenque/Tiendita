import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Category } from '../../_model/category';
import { Product } from '../../_model/product';
import { CategoryService } from '../../_service/category.service';
import { ProductService } from '../../_service/product.service';

declare var $: any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  categories: Category[] = [];
  formulario = this.formBuilder.group({
    id_product: [''],
    gtin: ['',Validators.required],
    product: ['',Validators.required],
    description: [''],
    price: ['',Validators.required],
    stock: ['',Validators.required],
    id_category: ['',Validators.required],
    status: ['']
  });
  submitted = false;

  constructor(
    private product_service: ProductService,
    private category_service: CategoryService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.product_service.getProducts().subscribe(
      res => {
        this.products = res;
      },
      err => console.log(err)
    )
  }

  onSubmit(){
    this.submitted = true;
    if(this.formulario.invalid){
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Faltan campos por llenar'
      })
      return;
    }
    this.product_service.createProduct(this.formulario.value).subscribe(
      res => {
        this.getProducts();
        this.closeModal();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Registro exitoso',
          showConfirmButton: false,
          timer: 1000
        })
      },
      err => {
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'El producto no puede ser registrado'
        })
      }
    )
  }

  createProduct(){
    this.getCategories();
    this.formulario.reset();
    this.formulario.controls['id_category'].setValue(0);
    $("product_modal").modal("show");
  }

  deleteProduct(id_product: number) {
    Swal.fire({
      title: '¿Deseas eliminar el producto?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      confirmButtonText: "Si eliminar",
      cancelButtonColor: '#d33'
    }).then((result) => {
      if(result.isConfirmed){
        this.product_service.deleteProduct(id_product).subscribe(
          res => {
            this.getProducts();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Eliminacion exitosa',
              showConfirmButton: false,
              timer: 1000
            })
          },
          err => {
            console.log(err);
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'El producto no puede ser eliminado'
            })
          }
        )
      }
    })
  }

  getCategories(){
    this.category_service.getCategorys().subscribe(
      res => {
        this.categories = res;
      },
      err => console.log(err)
    )
  }

  get f(){
    return this.formulario.controls;
  }

  closeModal(){
    $("#product_modal").modal('hide');
    this.submitted = false;
  }

  productDetail(gtin: string){
    this.router.navigate(['product-detail/'+gtin]);
  }


}
