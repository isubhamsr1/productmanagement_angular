import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { CanActivate, Router, ActivatedRoute } from '@angular/router';
import { CategoryModel } from '../Model/CategoryModel'
import { ProductModel } from '../Model/ProductModel'

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  Name!: string
  ShortDescription!: string
  Description!: string
  CategoryId!: number
  Price!: number
  BidEndDate!: Date

  error = false
  message!: string
  isSubmit = false

  status!: null

  categories!: CategoryModel[]

  constructor(private productService: ProductService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCategories();
  }

  onSubmit(){
    this.isSubmit = true
    const product = {
      name: this.Name,
      shortDescription: this.ShortDescription,
      description: this.Description,
      categoryId: this.CategoryId,
      price: this.Price,
      bidEndDate: this.BidEndDate
    }
    console.log(this.CategoryId);
    

    const credentials = JSON.stringify(product);

    this.productService.addProduct(credentials).subscribe((res)=>{
      const error = (<any>res).error;
      if(error)
      {
        this.error = true;
        this.isSubmit = false
        this.message = (<any>res).message
      }
      else{
        this.error = false;
        this.isSubmit = false
        this.router.navigate([''])
      }
    }, err => {
      this.error = true;
      this.isSubmit = false
      this.message = "Session Expired, You need to login";
      this.status = err.status
    })
  }

  getCategories(){
    this.productService.getCategories().subscribe((res)=>{
      console.log((<any>res).data);
      const error = (<any>res).error;
      if(error)
      {
        this.error = true;
        this.message = (<any>res).message
      }
      else{
        this.error = false;
        this.categories = (<any>res).data
      }
    }, err => {
      this.error = true;
      this.message = "Session Expired, You need to login";
      this.status = err.status
    })
  }

}
