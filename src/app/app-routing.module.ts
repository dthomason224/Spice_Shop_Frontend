import { ProductByCategoryComponent } from './product-by-category/product-by-category.component';
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';

const routes: Routes = [{
  path: 'products',
  component: ProductByCategoryComponent
}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
