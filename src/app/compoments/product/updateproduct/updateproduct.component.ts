import { Component, OnInit } from '@angular/core';
import { CanActivate, Router, ActivatedRoute } from '@angular/router';
import { CategoryModel } from '../Model/CategoryModel'
import { ProductModel } from '../Model/ProductModel'
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {

  Name!: string
  ShortDescription!: string
  Description!: string
  CategoryId!: number
  Price!: number
  BidEndDate!: Date

  error = false
  message!: string
  isSubmit = false

  product!: ProductModel[]

  id!: number

  categories!: CategoryModel[]

  constructor(private productService: ProductService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCategories();
    let id = this.activatedRoute.snapshot.params['id'];
    this.id = id
    this.getProduct(id)
  }

  onSubmit(){
    this.isSubmit = true
    const product = {
      id: this.id,
      name: this.Name,
      shortDescription: this.ShortDescription,
      description: this.Description,
      categoryId: this.CategoryId,
      price: this.Price,
      bidEndDate: this.BidEndDate
    }
    console.log(this.CategoryId);
    

    const credentials = JSON.stringify(product);

    this.productService.updateProduct(credentials).subscribe((res)=>{
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
        this.router.navigate([`/product/${this.id}`])
      }
    }, err => {
      this.error = true;
      this.isSubmit = false
      this.message = err.message
      
    })
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
        this.Name = (<any>res).data[0].Name
        this.ShortDescription = (<any>res).data[0].ShortDescription
        this.Description = (<any>res).data[0].Description
        this.CategoryId = (<any>res).data[0].CategoryId
        this.Price = (<any>res).data[0].Price
        this.BidEndDate = (<any>res).data[0].BidEndDate
      }
    }, err => {
      this.error = true;
      this.message = err.message
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
      this.message = err.message
      
    })
  }

}
