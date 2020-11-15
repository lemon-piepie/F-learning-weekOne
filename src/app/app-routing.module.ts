import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoodsListComponent } from './components/goods-list/goods-list.component';
import { NewGoodsFormComponent } from './components/new-goods-form/new-goods-form.component';

const routes: Routes = [
  {
    path:'home',component:GoodsListComponent
  },
  {
    path:'add',component:NewGoodsFormComponent
  },
  {
    path:'**',redirectTo:'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
