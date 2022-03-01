import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductByCategoryComponent } from './product-by-category/product-by-category.component';
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';

const routes: Routes = [{
  path: 'products',
  component: ProductByCategoryComponent
},
{
  path: 'shopping-cart',
  component: ShoppingCartComponent
},
{
  path: 'categories',
  children: [
    {
      path: ':name/products',
      component: ProductByCategoryComponent

    }
  ]
}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
