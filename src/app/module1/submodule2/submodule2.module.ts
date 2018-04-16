import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Submodule2RoutingModule } from './submodule2-routing.module';
// import { Comp1Component } from './comp1/comp1.component';
import { Submodule2comp1Component } from './submodule2comp1/submodule2comp1.component';

@NgModule({
  imports: [
    CommonModule,
    Submodule2RoutingModule
  ],
  declarations: [Submodule2comp1Component]
})
export class Submodule2Module { }
