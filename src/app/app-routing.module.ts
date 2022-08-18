import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '',redirectTo:'seller',pathMatch:'full'},
{ path: 'seller', loadChildren: () => import('./seller/seller.module').then(m => m.SellerModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
