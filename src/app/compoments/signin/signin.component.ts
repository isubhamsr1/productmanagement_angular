import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ApiService } from 'src/app/shared/api.service';
import { TokenService } from 'src/app/shared/token.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  error = false
  message!: string
  isSubmit = false

  UserName!: string
  Password!: string

  constructor(private router: Router, private tokenService: TokenService, private apiService: ApiService) { }

  ngOnInit(): void {
    this.deleteToken()
  }

  deleteToken(){
    const token = this.tokenService.getToken()
    if(token !== null){
      this.tokenService.removeToken()
    }
  }

  onSubmit(){
    this.isSubmit = true
    const signin = {
      userName: this.UserName,
      password: this.Password
    }
    console.log(signin);

    const credentials = JSON.stringify(signin);

    this.apiService.signin(credentials).subscribe((res)=>{
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
        const token = (<any>res).token
        this.tokenService.setToken(token);
        this.router.navigate([''])
      }
    }, err => {
      this.error = true;
      this.isSubmit = false
      this.message = err.message
      
    })
  }

}
