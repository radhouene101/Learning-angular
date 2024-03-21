import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeComponentComponent } from './le-component/le-component.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NewProductComponent } from './new-product/new-product.component';

// @ts-ignore
const routes: Routes = [
  {
    path :'home',
    component:LeComponentComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'about/:username',
    component: AboutComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'new-product',
    component: NewProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
