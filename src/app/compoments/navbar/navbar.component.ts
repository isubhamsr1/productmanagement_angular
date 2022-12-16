import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/shared/token.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private tokenService: TokenService, private router: Router) { }

  token!: boolean

  ngOnInit(): void {
    this.checkToken()
  }

  checkToken(){
    this.token = this.tokenService.checkToken()
  }

  handleLogout(){
    this.tokenService.removeToken();
    this.router.navigate(["/signin"])
  }

}
