import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CoresModule } from '../cores/cores.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CoresModule,
    AuthRoutingModule
  ],
  declarations: [LoginComponent, RegisterComponent]
})
export class AuthModule {}
