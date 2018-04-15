import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Submodule1RoutingModule } from './submodule1-routing.module';
import { Comp1Component } from './comp1/comp1.component';

@NgModule({
  imports: [
    CommonModule,
    Submodule1RoutingModule
  ],
  declarations: [Comp1Component]
})
export class Submodule1Module { }
