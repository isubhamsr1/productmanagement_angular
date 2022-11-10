import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ProductModel } from '../Model/ProductModel'

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  // @Input() product: ProductModel = {} as ProductModel
  // @Input() i : number = 0 as number

  products!: ProductModel[]
  error = false
  message!: string

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts(){
    this.productService.getProducts().subscribe((res)=>{
      console.log((<any>res));
      
      const error = (<any>res).error;
      if(error)
      {
        this.error = true;
        this.message = (<any>res).message
      }
      else{
        this.error = false;
      }
      this.products = (<any>res).data
    }, err => {
      this.error = true;
      this.message = err.message
    })
  }

}
