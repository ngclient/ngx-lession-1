import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'submodule1', loadChildren: './submodule1/submodule1.module#Submodule1Module'
  },
  {
    path: 'submodule2', loadChildren: './submodule2/submodule2.module#Submodule2Module'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module1RoutingModule { }
