import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from '../Model/ProductModel'

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  @Input() product: ProductModel = {} as ProductModel
  @Input() i : number = 0 as number

  constructor() { }

  ngOnInit(): void {
  }

}
