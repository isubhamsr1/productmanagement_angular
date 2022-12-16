import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './compoments/product/addproduct/addproduct.component';
import { ProductComponent } from './compoments/product/product.component';
import { UpdateproductComponent } from './compoments/product/updateproduct/updateproduct.component';
import { ViewproductComponent } from './compoments/product/viewproduct/viewproduct.component';
import { SigninComponent } from './compoments/signin/signin.component';
import { SignupComponent } from './compoments/signup/signup.component';
import { AuthGuard } from './services/auth.guard';
import { SigninGuard } from './services/signin.guard';

const routes: Routes = [
  { path: '', component: ProductComponent, canActivate:[AuthGuard] },
  { path: 'add', component: AddproductComponent, canActivate:[AuthGuard] },
  { path: 'update/:id', component: UpdateproductComponent, canActivate:[AuthGuard] },
  { path: 'product/:id', component: ViewproductComponent, canActivate:[AuthGuard] },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, SigninGuard]
})
export class AppRoutingModule { }
