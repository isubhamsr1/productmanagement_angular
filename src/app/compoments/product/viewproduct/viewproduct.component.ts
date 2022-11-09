import { Component, OnInit } from '@angular/core';
import { CanActivate, Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { ProductModel } from '../Model/ProductModel'

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  error = false
  message!: string
  product!: ProductModel[]

  id!: number

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id'];
    this.id = id
    this.getProduct(id)
  }

  getProduct(id:number){
    this.productService.getProductById(id).subscribe((res)=>{
      
      const error = (<any>res).error;
      if(error)
      {
        this.error = true;
        this.message = (<any>res).message
      }
      else{
        this.error = false;
        this.product = (<any>res).data
      }
      this.product = (<any>res).data
    }, err => {
      this.error = true;
      this.message = err.message
    })
  }

}
