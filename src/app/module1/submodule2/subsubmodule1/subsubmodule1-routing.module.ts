import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Subsubcomp1Component } from './subsubcomp1/subsubcomp1.component';

const routes: Routes = [
  {path: '', component: Subsubcomp1Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Subsubmodule1RoutingModule { }
