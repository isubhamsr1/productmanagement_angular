import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL = "https://localhost:7174/api/"

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.tokenService.getToken(),
    }),
  }

  signin(body : any){
    return this.http.post(`${this.baseURL}Auth/Signin`, body, this.header)
  }

  signup(body : any){
    return this.http.post(`${this.baseURL}Auth`, body, this.header)
  }
}
