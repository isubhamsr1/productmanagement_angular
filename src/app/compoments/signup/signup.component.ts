import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  error = false
  message!: string
  isSubmit = false

  UserName!: string
  Password!: string

  constructor(private router: Router, private apiService: ApiService ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.isSubmit = true
    const signup = {
      userName: this.UserName,
      password: this.Password
    }

    const credentials = JSON.stringify(signup);

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
        this.router.navigate(['/signin'])
      }
    }, err => {
      this.error = true;
      this.isSubmit = false
      this.message = err.message
      
    })
  }

}
