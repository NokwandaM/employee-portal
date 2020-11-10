import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategotiesComponent } from './categoties/categoties.component';
import { NewCategotyComponent } from './new-categoty/new-categoty.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductService } from './product.service';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
    {path: "", component: CategotiesComponent},
    {path: "newProduct", component: NewProductComponent},
    {path: "newCategory", component: NewCategotyComponent},
    {path: "product", component: ProductComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
