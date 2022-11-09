import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './compoments/product/product.component';
import { ProductlistComponent } from './compoments/product/productlist/productlist.component';
import { AddproductComponent } from './compoments/product/addproduct/addproduct.component';
import { UpdateproductComponent } from './compoments/product/updateproduct/updateproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductlistComponent,
    AddproductComponent,
    UpdateproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
