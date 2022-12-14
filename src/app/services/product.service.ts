import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel } from '../compoments/product/Model/ProductModel'
import { TokenService } from '../shared/token.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseURL = "https://localhost:7174/api/"

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.tokenService.getToken(),
    }),
  }

  getProducts() {
    return this.http.get(`${this.baseURL}Product`, this.header)
  }

  getProductById(id: number) {
    return this.http.get(`${this.baseURL}Product/${id}`, this.header)
  }

  deleteProduct(id: number) {
    return this.http.delete(`${this.baseURL}Product/${id}`, this.header)
  }

  addProduct(body: any) {
    return this.http.post(`${this.baseURL}Product`, body, this.header)
  }

  updateProduct(body: any) {
    return this.http.put(`${this.baseURL}Product`, body, this.header)
  }

  getCategories() {
    return this.http.get(`${this.baseURL}Category`, this.header)
  }
}
