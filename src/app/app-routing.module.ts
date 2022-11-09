import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './compoments/product/addproduct/addproduct.component';
import { ProductComponent } from './compoments/product/product.component';
import { UpdateproductComponent } from './compoments/product/updateproduct/updateproduct.component';
import { ViewproductComponent } from './compoments/product/viewproduct/viewproduct.component';

const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'add', component: AddproductComponent },
  { path: 'update/:id', component: UpdateproductComponent },
  { path: 'product/:id', component: ViewproductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
