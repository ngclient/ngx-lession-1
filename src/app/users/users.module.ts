import { CoresModule } from './../cores/cores.module';
import { LayoutsModule } from './../shared/layouts/layouts.module';
import { ComponentsModule } from './../shared/components/components.module';
import { UserService } from './../shared/services/user/user.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserComponent } from './user/user.component';
import { UserGridComponent } from './user-grid/user-grid.component';
import { UserFormComponent } from './user-form/user-form.component';

import { AppRoutingModule } from '../app-routing.module';
import { DevExtremeModule } from 'devextreme-angular';

const COMPONENT = [
  UserComponent,
  UserGridComponent,
  UserFormComponent
];

@NgModule({
  imports: [
    CoresModule.forRoot(),
    DevExtremeModule,
    LayoutsModule,
    UsersRoutingModule,
  ],
  declarations: [...COMPONENT],
  exports: [...COMPONENT],
  providers: [UserService]
})
export class UsersModule { }
