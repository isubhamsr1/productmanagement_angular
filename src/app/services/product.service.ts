import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel } from '../compoments/product/Model/ProductModel'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseURL = "https://localhost:7174/api/"

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(`${this.baseURL}Product`)
  }

  getProductById(id: number) {
    return this.http.get(`${this.baseURL}Product/${id}`)
  }

  deleteProduct(id: number) {
    return this.http.delete(`${this.baseURL}Product/${id}`)
  }

  addProduct(body: any) {
    return this.http.post(`${this.baseURL}Product`, body, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    })
  }

  getCategories() {
    return this.http.get(`${this.baseURL}Category`)
  }
}
