import { DevExtremeModule } from 'devextreme-angular';
import { LayoutsModule } from './../shared/layouts/layouts.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { RoleComponent } from './role/role.component';
import { RoleFormComponent } from './role-form/role-form.component';
import { CoresModule } from '../cores/cores.module';

@NgModule({
  imports: [
    CoresModule.forRoot(),
    DevExtremeModule,
    RolesRoutingModule,
    LayoutsModule
  ],
  declarations: [RoleComponent, RoleFormComponent]
})
export class RolesModule { }
