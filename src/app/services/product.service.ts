import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseURL = "https://localhost:7174/api/"

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get(`${this.baseURL}Product`)
  }

  getProductById(id: number){
    return this.http.get(`${this.baseURL}Product/${id}`)
  }

  deleteProduct(id: number){
    return this.http.delete(`${this.baseURL}Product/${id}`)
  }
}
