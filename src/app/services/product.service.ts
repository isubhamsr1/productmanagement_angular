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
}
