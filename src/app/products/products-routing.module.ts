import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './pages/product/product.component';

const routes: Routes = [
  {
    path: 'M1', children: [
      { path: 'product', component: ProductComponent },
      { path: '**', redirectTo: 'product' },
    ]
  },

  { path: '**', redirectTo: 'M1' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
