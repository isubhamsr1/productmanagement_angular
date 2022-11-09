import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './compoments/product/addproduct/addproduct.component';
import { ProductComponent } from './compoments/product/product.component';

const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'add', component: AddproductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
