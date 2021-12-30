import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../../_service/customer.service';
import { RegionService } from '../../_service/region.service';
import Swal from 'sweetalert2';
import { Customer } from '../../_model/customer';
import { Region } from '../../_model/region';

declare var $: any;

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers: Customer[] = [];
  customer: Customer = new Customer();
  regions: Region[] = [];
  formulario = this.formBuilder.group({
    id_customer: [''],
    name: ['',Validators.required],
    surname: ['',Validators.required],
    rfc: ['',Validators.required],
    mail: ['',Validators.required],
    address: ['',Validators.required],
    status: [''],
    id_region: ['',Validators.required],
    image: ['']
  });
  submitted = false;


  constructor(
    private customer_service: CustomerService,
    private region_service: RegionService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(){
    this.customer_service.getCustomers().subscribe(
      res => {
        this.customers = res
      },
      err => console.log(err)
    )
  }

  onSubmit() {
    this.submitted = true;
      this.customer_service.createCustomer(this.formulario.value).subscribe(
        res => {
          this.getCustomers();
          this.closeModal();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Registro exitosos',
            showConfirmButton: false,
            timer: 1000
          })
        },
        err => {
          console.log(err)
          Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'El usuario no puede ser creada'
          })
        }
      )
  }

  createCustomer(){
    this.getRegions();
    this.formulario.reset();
    this.formulario.controls['id_region'].setValue(0);
    $("#customer_modal").modal("show");
  }


  deleteCustomer(id_customer:number){
    Swal.fire({
      title: '¿Desas eliminar el Cliente?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.customer_service.deleteCustomer(id_customer).subscribe(
          res => {
            this.getCustomers();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Usuario eliminado',
              showConfirmButton: false,
              timer: 1000
            })
          },
          err => {
            console.log(err)
            Swal.fire({
              icon: 'error',
              title: 'Error!',
              text: 'El usuario no puede ser eliminado'
            })
          }
        )
        
      }
    })
    
  }

  getRegions(){
    this.region_service.getRegions().subscribe(
      res => {
        this.regions = res;
      },
      err => console.log(err)
    )
  }

  get f(){
    return this.formulario.controls;
  }

  closeModal(){
    $("customer_modal").modal("hide");
    this.submitted = false;
  }

  customerDetail(rfc:string){
    this.router.navigate(['customer-detail/'+rfc]);
  }
}
