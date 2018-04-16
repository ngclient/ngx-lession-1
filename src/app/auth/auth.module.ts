import { AuthserviceService } from './authservice.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CoresModule } from '../cores/cores.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { fakeBackendProvider } from './fake-backend';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    CoresModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ],
  declarations: [LoginComponent, RegisterComponent],
  providers: [
    AuthserviceService,  // provider used to create fake backend
    fakeBackendProvider
  ],
})
export class AuthModule { }
