import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './compoments/product/product.component';
import { ProductlistComponent } from './compoments/product/productlist/productlist.component';
import { AddproductComponent } from './compoments/product/addproduct/addproduct.component';
import { UpdateproductComponent } from './compoments/product/updateproduct/updateproduct.component';
import { NavbarComponent } from './compoments/navbar/navbar.component';
import { ViewproductComponent } from './compoments/product/viewproduct/viewproduct.component';
import { SignupComponent } from './compoments/signup/signup.component';
import { SigninComponent } from './compoments/signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductlistComponent,
    AddproductComponent,
    UpdateproductComponent,
    NavbarComponent,
    ViewproductComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
