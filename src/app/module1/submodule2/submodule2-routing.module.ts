import { Submodule2comp1Component } from './submodule2comp1/submodule2comp1.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: Submodule2comp1Component },
  { path: 'subsubmodule1', loadChildren: './subsubmodule1/subsubmodule1.module#Subsubmodule1Module' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Submodule2RoutingModule { }
