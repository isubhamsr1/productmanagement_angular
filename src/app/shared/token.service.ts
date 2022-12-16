import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  checkToken(){
    const token = localStorage.getItem("token");
    
    if(token !== null){
      return true
    }
    return false
  }

  getToken(){
    const token = localStorage.getItem("token");
    if(token !== null){
      return token;
    }
    return false
  }

  removeToken(){
    const token = localStorage.getItem("token");
    if(token !== null){
      localStorage.removeItem("token")
    }
  }

  setToken(tokenItem : string){
    const token = localStorage.getItem("token");
    if(token === null){
      localStorage.setItem("token", tokenItem)
    }
  }

  decodeToken(){
    const token = localStorage.getItem("token");
    if(token !== null){
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      console.log(decodedToken.Role);
      return decodedToken.Role;
    }
    
  }
}
