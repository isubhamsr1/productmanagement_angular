import { Component, OnInit } from '@angular/core';
import { CanActivate, Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { TokenService } from 'src/app/shared/token.service';
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

  status!: null
  role!: string

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params['id'];
    this.id = id
    this.getProduct(id)
    this.role = this.tokenService.decodeToken()
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
    }, err => {
      this.error = true;
      this.status = err.status
      
    })
  }

  handleDelete(id: number){
    this.productService.deleteProduct(id).subscribe((res)=>{
      
      const error = (<any>res).error;
      if(error)
      {
        this.error = true;
        this.message = (<any>res).message
      }
      else{
        this.error = false;
        this.router.navigate([''])
      }
      this.product = (<any>res).data
    }, err => {
      this.error = true;
      this.status = err.status
    })
  }

}
