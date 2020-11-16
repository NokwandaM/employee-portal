import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategotiesComponent } from './categoties/categoties.component';
import { LoginComponent } from './login/login.component';
import { NewCategotyComponent } from './new-categoty/new-categoty.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductService } from './product.service';
import { ProductComponent } from './product/product.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
    {path: "", component: LoginComponent},
    {path: "categories", component: CategotiesComponent},
    {path: "newProduct", component: NewProductComponent},
    {path: "newCategory", component: NewCategotyComponent},
    {path: "product", component: ProductComponent},
    {path: "register", component: RegisterComponent},
    {path: "login", component: LoginComponent},
    {path: "profile", component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
