import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Subsubmodule1RoutingModule } from './subsubmodule1-routing.module';
import { Subsubcomp1Component } from './subsubcomp1/subsubcomp1.component';
import { LayoutsModule } from '../../../shared/layouts/layouts.module';

@NgModule({
  imports: [
    CommonModule,
    LayoutsModule,
    Subsubmodule1RoutingModule
  ],
  declarations: [Subsubcomp1Component]
})
export class Subsubmodule1Module { }
