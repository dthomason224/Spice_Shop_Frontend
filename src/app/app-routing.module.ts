import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductByCategoryComponent } from './product-by-category/product-by-category.component';
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [{
  path: 'products',
  component: ProductListComponent
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
